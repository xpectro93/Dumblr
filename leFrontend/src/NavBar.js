import React, { Component } from 'react'
import './css/NavBar.css'
import { NavLink } from 'react-router-dom'
import output from './output.gif';
import axios from 'axios'
import Auth from "./Auth.js"
const style = {
  width:"40px"
}
export default class NavBar extends Component {
  state = {
    navInput:''
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]:e.target.value

    })
  }

  logout = () => {
    axios
      .post("/api/session/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
  }
  logMeOut = () => {
    console.log('clicked')
    this.logout();
    window.location = '/';
  }

render(){
  return(
    <nav>
      <div className="navbar">
      <div id="navbar1">
         <NavLink to='/dashboard' ><img src={output} alt="leLogo"style={style}/> </NavLink>
         <form>
        <input  id="navInput" onChange={this.handleChange} type="text"/>
        </form>
        </div>
        <div id="navbar2">
        <li id='nav-button'><NavLink exact to='/dashboard'><img  src="https://img.icons8.com/nolan/64/000000/home.png" alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/explore'><img  src="https://img.icons8.com/nolan/64/000000/dashboard.png"alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/blog'><img  src="https://img.icons8.com/nolan/64/000000/user-male-circle.png" alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/create-post'><img  id='create-post' src="https://img.icons8.com/nolan/64/000000/create.png" alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/'><img onClick={this.logMeOut}  src="https://img.icons8.com/nolan/64/000000/exit.png" alt="logout" style={style} /></NavLink></li>

        </div>
      </div>
    </nav>
  )
}

}
