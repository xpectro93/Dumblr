import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
// import Login from "./components/login/login"


import { NavBar } from './NavBar.js'


import Dashboard from './components/dashboard/Dashboard.js'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Route component={ NavBar } />
      <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </div>
    );
  }
}

export default App;
