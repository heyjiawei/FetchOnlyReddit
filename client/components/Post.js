import React from 'react'

const Post = ({ author, created, domain, title, onPostClick, selftext }) => (
  <li
    onClick={onPostClick}
  >
    <div>
      <h3>{title}</h3>
      <h5>By {author}, {new Date(created).toLocaleString()}</h5>
      <h5>{domain}</h5>
    </div>
  </li>
)

export default Post
