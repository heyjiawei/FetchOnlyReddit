import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    return (
      <Link to="/80">This is a post</Link>
    )
  }
}
