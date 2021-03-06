import React from 'react'
import { Route } from 'react-router-dom'
import SubredditList from './SubredditList'
import Listings from './Listings'
import Chatroom from './Chatroom'

const App = () => (
  <div>
    <SubredditList />
    <Route exact path='/' component={Listings} />
    <Route path='/:id' component={Chatroom} />
  </div>
)

export default App
