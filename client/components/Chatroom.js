import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chatbox from './Chatbox'

class Chatroom extends Component {
  // printReplies(details) {
  //   console.log(details)
  //   for (let detail of details) {
  //     console.log(detail)
  //     return (
  //       <Chatbox
  //         {...detail}
  //       />
  //     )
  //   }
  // }
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

    if (this.props.post.length > 0) {
      let postData = this.props.post[0]
      let chatboxes = []
      this.props.details.forEach((detail, index) => {
        console.log(detail)
        chatboxes.push(
          <Chatbox
            key={index}
            {...detail}
          />
        )
      })

      return (
        <div>
          <h1>{postData.title}</h1>
          <h5>By {postData.author}, {new Date(postData.created).toLocaleString()}</h5>
          <div dangerouslySetInnerHTML={{ __html: postData.selftext }} />
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
