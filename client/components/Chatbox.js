import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Chatbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { author, body, created, level } = this.props
    let dateTime = new Date(created * 1000).toUTCString()
    let style = {
        marginLeft: (0.5 * level) + 'em'
    }

    return (
      <div style={style}>
        <Paper
          elevation={4}
        >
          <Typography
            type="body1"
            component="div"
          >
            By {author}, {dateTime}
            <br/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default Chatbox
