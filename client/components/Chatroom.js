import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import Chatbox from './Chatbox'

class Chatroom extends Component {
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
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
      return <div></div>
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
