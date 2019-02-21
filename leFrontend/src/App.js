import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
// import Login from "./components/login/login"
// import cors from 'cors';

import { NavBar } from './NavBar.js'


import dashboardContainer from './components/dashboard/dashboardContainer.js'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Route component={ NavBar } />
      <Switch>
      <Route path="/" component={dashboardContainer} />
      <Route path="/dashboard" component={dashboardContainer} />
      </Switch>
      </div>
    );
  }
}

export default App;
