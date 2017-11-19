// import fetch from 'isomorphic-fetch'

// fetch api actions
export const FETCH_LISTING_LOADING = 'FETCH_LISTING_LOADING'
export const FETCH_LISTING_FAILURE = 'FETCH_LISTING_FAILURE'
export const FETCH_LISTING_SUCCESS = 'FETCH_LISTING_SUCCESS'

export const CURRENT_POST_ID = 'CURRENT_POST_ID'

export const FETCH_DETAILS_LOADING = 'FETCH_DETAILS_LOADING'
export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE'
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS'

// Action creators
export const listingsErrored = (bool) => ({
  type: FETCH_LISTING_FAILURE,
  hasError: bool
})

export const listingsLoading = (bool) => ({
  type: FETCH_LISTING_LOADING,
  isLoading: bool
})

export const listingsSuccess = (listings) => ({
  type: FETCH_LISTING_SUCCESS,
  listings
})

export const fetchListings = (subreddit = 'singapore') => {
  return (dispatch) => {
    dispatch(listingsLoading(true))

    fetch(`https://www.reddit.com/r/${subreddit}.json?raw_json=1`)
      .then(response => {
        dispatch(listingsLoading(false))
        return response.json()
      })
      .then(data => data.data.children)
      .then(listings => {
        let posts = []
        for (let item of listings) {
          let data = item.data
          posts.push({
            author: data.author,
            created: data.created,
            domain: data.domain,
            id: data.id,
            num_comments: data.num_comments,
            permalink: data.permalink,
            score: data.score,
            selftext: data.selftext_html,
            subreddit: data.subreddit_name_prefixed,
            title: data.title,
            url: data.url
          })
        }
        dispatch(listingsSuccess(posts))
      })
      .catch(() => dispatch(listingsErrored(true)))
  }
}

export const currentPostId = (id) => ({
  type: CURRENT_POST_ID,
  currentPostId: id
})

export const detailsErrored = (bool) => ({
  type: FETCH_DETAILS_FAILURE,
  hasError: bool
})

export const detailsLoading = (bool) => ({
  type: FETCH_DETAILS_LOADING,
  isLoading: bool
})

export const detailsSuccess = (details) => ({
  type: FETCH_DETAILS_SUCCESS,
  details
})

export const retrieveReplies = (replies, level) => {
  let convo = []
  for (let reply of replies) {
    if (reply.kind == 't1') {
      let r = reply.data
      convo.push({
        author: r.author,
        body: r.body_html,
        created: r.created,
        level
      })

      if (r.replies) {
        let repliesToReplies = retrieveReplies(r.replies.data.children, level + 1)
        convo = convo.concat(repliesToReplies)
      }
    }
  }
  return convo
}

export const fetchDetails = (permalink) => {
  return (dispatch) => {
    dispatch(detailsLoading(true))

    let details = []
    let thread = permalink.slice(0, -1)

    fetch(`https://www.reddit.com${thread}.json?raw_json=1`)
      .then(response => {
        dispatch(detailsLoading(false))
        return response.json()
      })
      .then(data => data[1].data.children)
      .then(comments => {
        // console.log(comments)
        details = retrieveReplies(comments, 0)
        dispatch(detailsSuccess(details))
      })
      .catch(() => dispatch(detailsErrored(true)))
  }
}
