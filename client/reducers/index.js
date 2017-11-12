import { combineReducers } from 'redux'
import {
  FETCH_LISTING_FAILURE,
  FETCH_LISTING_LOADING,
  FETCH_LISTING_SUCCESS,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_SUCCESS,
  CURRENT_POST_ID
} from '../actions'

export const detailHasError = (state = false, action) => {
  switch (action.type) {
    case FETCH_DETAILS_FAILURE:
      return action.hasError

    default:
      return state
  }
}

export const detailIsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_DETAILS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

export const details = (state = [], action) => {
  switch (action.type) {
    case FETCH_DETAILS_SUCCESS:
      return action.details

    default:
      return state
  }
}

export const listingHasError = (state = false, action) => {
  switch (action.type) {
    case FETCH_LISTING_FAILURE:
      return action.hasError

    default:
      return state
  }
}

export const listingIsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_LISTING_LOADING:
      return action.isLoading

    default:
      return state
  }
}

export const listings = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTING_SUCCESS:
      return action.listings

    default:
      return state
  }
}

export const currentPostId = (state = '', action) => {
  switch (action.type) {
    case CURRENT_POST_ID:
      return action.currentPostId

    default:
      return state
  }
}

export const redditApp = combineReducers({
  listings,
  listingHasError,
  listingIsLoading,
  details,
  detailHasError,
  detailIsLoading,
  currentPostId
})
