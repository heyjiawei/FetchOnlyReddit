import React, { Component } from 'react'
//
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

import Topic from './Topic'

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class SubredditList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false
    }
  }

  toggleDrawer(open) {
    this.setState({
      drawer: open
    })
  }

  render() {
    // console.log(this.state)
    // console.log(this.props)
    const { classes } = this.props
    let { drawer } = this.state
    const sideList = (
      <div>
        <List>
          <ul>
            <Topic />
          </ul>
        </List>
      </div>
    )

    return (
      <div>
        <Button onClick={() => this.toggleDrawer(!drawer)}>
          Topics
        </Button>

        <Drawer
          open={drawer}
          onRequestClose={() => this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <ul>
  //         <Topic />
  //       </ul>
  //     </div>
  //   )
  // }
}

export default withStyles(styles)(SubredditList);
