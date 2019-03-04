import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { NavBar } from './NavBar.js'

// import loginContainer from './components/login/loginContainer.js'

import DashboardContainer from './components/dashboard/dashboardContainer.js'
// import LoginContainer from './components/login/loginContainer.js'
import Explore from './components/explore/Explore.js'


class App extends Component {
  //redirect for login prop for log(isLoggedIn===false)

  render() {

      return (
        <div className="App">
        <NavBar />
        <h1>THIS IS APP </h1>

        <Switch>
          <Route path="/dashboard" render={(props) => {
            return <DashboardContainer {...props} />
          }} />
          <Route path="/explore" render={(props) => {
            return <Explore {...props} />
          }} />
          <Route path="/" render={(props) => {
            return <DashboardContainer {...props} />
          }} />


        </Switch>

        </div>
      )

  }
}

export default withRouter(App);
