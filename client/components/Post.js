import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { author, created, domain, title, onPostClick, selftext } = this.props
    let dateTime = new Date(created * 1000).toUTCString()
    return (
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
          By {author}, {dateTime}
          <br/>
          {domain}
        </Typography>
      </Paper>
    )
  }
}

export default Post
