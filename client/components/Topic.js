import React from 'react'
import PropTypes from 'prop-types'

const Topic = ({ active, onClick }) => {
  if (active) {
    return <span>Singapore</span>
  } else {
    return (
      <a
        href="#"
        onClick={e => onClick()}
      >
        <div>
          Singapore
        </div>
      </a>
    )
  }
}

export default Topic
