import React from 'react'
import './App.scss'

import Nav from './components/widgets/nav/Nav'

import NoMatch from './components/views/no-match/NoMatch'

import Home from './components/views/home/Home'
import Users from './components/views/users/Users'
import User from './components/views/user/User'
import AddUser from './components/views/add-user/AddUser'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/users/edit/:id" component={User} exact />
          <Route path="/users/add" component={AddUser} exact />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
