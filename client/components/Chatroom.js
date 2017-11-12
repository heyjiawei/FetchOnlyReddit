import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chatbox from './Chatbox'

class Chatroom extends Component {
  // printReplyStructure(details, level) {
  //   let chatboxes = []
  //   if (!Array.isArray(details)) {
  //     return chatboxes
  //   } else {
  //     for (let item of details) {
  //       chatboxes.push(
  //         <Chatbox
  //           {...item}
  //           level={level}
  //         />
  //       )
  //       printReplyStructure(details)
  //     }
  //   }
  // }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    if (this.props.postId.length > 0) {
      let postData = getPost(this.props.postId, this.props.listings)[0]
      console.log(this.props.details)

      return (
        <div>
          <h1>{postData.title}</h1>
          <h5>By {postData.author}, {new Date(postData.created).toLocaleString()}</h5>
          <div dangerouslySetInnerHTML={{ __html: postData.selftext }} />
          
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
  postId: state.currentPostId,
  listings: state.listings
})

export default connect(
  mapStateToProps
)(Chatroom)
