import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { NavBar } from './NavBar.js'

// import loginContainer from './components/login/loginContainer.js'
import Search from './components/search/Search.js'
import DashboardContainer from './components/dashboard/dashboardContainer.js'
import ExploreContainer from './components/explore/ExploreContainer.js'
import ProfileContainer from './components/profile/ProfileContainer.js'


class App extends Component {
  //redirect for login prop for log(isLoggedIn===false)

  render() {


      return (
        <div className="App">
        <NavBar />
        <div className="content">
        <div className="filler"></div>

        <Switch>
          <Route path="/dashboard" render={(props) => {
            return <DashboardContainer {...props} />
          }} />

          <Route path="/explore" render={(props) => {
            return <ExploreContainer {...props} />
          }} />
          <Route path="/blog" render={(props) => {
            return <ProfileContainer {...props} />
          }} />

          <Route path="/search/tag/:id" render={(props) => {
            return <Search {...props} />
          }} />

          <Route path="/" render={(props) => {
            return <DashboardContainer {...props} />
          }} />



        </Switch>
        </div>
        </div>
      )

  }
}

export default withRouter(App);
