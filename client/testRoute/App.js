import React from 'react'
import { Route } from 'react-router-dom'
import Listings from './Listings'
import Chatroom from './Chatroom'

const App = () => (
  <div>
    <p>Landing page</p>
    <Route exact path='/' component={Listings} />
    <Route path='/:id' component={Chatroom} />
  </div>
)

export default App
