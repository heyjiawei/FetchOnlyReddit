import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import { fetchListings } from '../actions'

import Chatbox from './Chatbox'

class Chatroom extends Component {
  // componentWillMount() {
  //   console.log(this.props)
  //   console.log(this.props.match.params.id, 'id')
  //   // When a URL is typed in directly
  //   // or when user refreshes
  //   if (this.props.post.length == 0) {
  //     this.props.dispatch(fetchListings())
  //   }
  // }

  render() {
    if (this.props.hasErrored) {
      return (
        <div>
          <p>Sorry! There was an error loading the items</p>
        </div>
      )
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    if (this.props.post.length > 0) {
      let postData = this.props.post[0]
      let dateTime = new Date(postData.created * 1000).toUTCString()
      let chatboxes = []
      this.props.details.forEach((detail, index) => {
        chatboxes.push(
          <Chatbox
            key={index}
            {...detail}
          >
            {detail.body}
          </Chatbox>
        )
      })

      return (
        <div>
          <Link to="/">Back</Link>
          <Paper
            elevation={4}
          >
            <Typography
              type="headline"
              component="h3"
            >
              {postData.title}
            </Typography>
            <Typography
              type="body1"
              component="div"
            >
              By {postData.author}, {dateTime}
              <br/>
              <div dangerouslySetInnerHTML={{ __html: postData.selftext }} />
            </Typography>
          </Paper>
          {chatboxes}
        </div>
      )
    } else {
      // this.props.dispatch(fetchDetailsByTopicAndId())
      return <div>Please fetch data!</div>
    }
  }
}

export const getPost = (postId, listings) => {
  return listings.filter(item => item.id == postId)
}

const mapStateToProps = (state) => ({
  details: state.details,
  hasErrored: state.detailHasError,
  isLoading: state.detailIsLoading,
  post: getPost(state.currentPostId, state.listings)
})

export default connect(
  mapStateToProps
)(Chatroom)
