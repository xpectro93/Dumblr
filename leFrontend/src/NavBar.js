import React from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'
const style = {
  width:"40px"
}
export const NavBar = () => {
  return(
    <nav>
      <div className="navbar">
      <div id="navbar1">
         <Link to='/dashboard' ><img src="https://pbs.twimg.com/media/CotvzQwWEAEmoJm.jpg" alt="leLogo"style={style}/> </Link>
        <input id="nav-input" type="text"/>
        </div>
        <div id="navbar2">
        <Link to='/dashboard'><img src="https://img.icons8.com/nolan/64/000000/home.png" alt="logo" style={style} /></Link>
        <Link to='/explore'><img src="https://img.icons8.com/nolan/64/000000/dashboard.png"alt="logo" style={style} /></Link>
        <Link to='/blog'><img src="https://img.icons8.com/nolan/64/000000/user-male-circle.png" alt="logo" style={style} /></Link>
        <Link to='/create-post'><img id='create-post' src="https://img.icons8.com/nolan/64/000000/create.png" alt="logo" style={style} /></Link>
        </div>
      </div>
    </nav>
  )
}
