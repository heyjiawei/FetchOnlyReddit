import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { redditApp } from './reducers'
import App from './components/App'

let store = createStore(
  redditApp,
  applyMiddleware(thunk)
 )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
