import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings, fetchDetails, currentPostId } from '../actions'

import Post from './Post'

class Listings extends Component {
  componentDidMount() {
    if (this.props.listings.length == 0) {
        this.props.fetchListings()
    }
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        {
          this.props.listings.map((item) => (
            <Post
              key={item.id}
              onPostClick={() => this.props.onPostClick(item.permalink, item.id)}
              {...item}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
  hasErrored: state.listingHasError,
  isLoading: state.listingIsLoading,
  postId: state.currentPostId
})

const mapDispatchToProps = (dispatch) => ({
  fetchListings: (subreddit) => dispatch(fetchListings(subreddit)),
  onPostClick: (permalink, id) => {
    dispatch(fetchDetails(permalink))
    dispatch(currentPostId(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings)
