import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings, fetchDetails, currentPostId } from '../actions'
import Post from './Post'

class Listings extends Component {
  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    console.log(this.props)
    return (
      <div>
        <ul>
          {
            this.props.listings.map((item) => (
              <Post
                key={item.id}
                onPostClick={() => this.props.onPostClick(item.permalink, item.id)}
                {...item}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
  hasErrored: state.listingHasError,
  isLoading: state.listingIsLoading
})

const mapDispatchToProps = (dispatch) => ({
  fetchListings: (subreddit) => dispatch(fetchListings(subreddit)),
  onPostClick: (permalink, id) => {
    dispatch(fetchDetails(permalink))
    dispatch(currentPostId(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings)
