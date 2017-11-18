import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const Post = ({ author, created, domain, title, onPostClick, selftext }) => (
  <Paper
    onClick={onPostClick}
    elevation={4}
  >
    <Typography
      type="headline"
      component="h3"
    >
      {title}
    </Typography>
    <Typography
      type="body1"
      component="p"
    >
      By {author}, {new Date(created).toLocaleString()}
      <br/>
      {domain}
    </Typography>
  </Paper>
)

export default Post
// <li
//   onClick={onPostClick}
// >
//   <div>
//     <h3></h3>
//     <h5>By {author}, {new Date(created).toLocaleString()}</h5>
//     <h5>{domain}</h5>
//   </div>
// </li>
