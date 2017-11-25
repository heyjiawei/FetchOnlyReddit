import React from 'react'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

export default class Post extends React.Component {
  render() {
    let { author, created, domain, title, onPostClick, selftext, id } = this.props
    let dateTime = new Date(created * 1000).toUTCString()
    return (
      <Link to={`/${id}`}>
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
      </Link>
    )
  }
}
