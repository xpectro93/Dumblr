import React from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'
const style = {
  width:"55px"
}
export const NavBar = () => {
  return(
    <nav>
      <div className="navbar">
      <div id="navbar1">
         <Link to={'/dashboard'} ><img src="https://pbs.twimg.com/media/CotvzQwWEAEmoJm.jpg" alt="leLogo"style={style}/> </Link>
        <input id="nav-input" type="text"/>
        </div>
        <div id="navbar2">
        <Link to={'/dashboard'} ><img src="https://img.icons8.com/windows/32/000000/castle.png" alt="logo"/></Link>
        <Link to={'/explore'} ><img src="https://img.icons8.com/ios/32/000000/sailing-ship-large.png"alt="logo" / ></Link>
        <Link to={'/blog'} ><img src="https://img.icons8.com/ios/32/000000/doctor-fate-helmet.png" alt="logo"/></Link>
        <Link to={'/create-post'} ><img id='create-post' src="https://img.icons8.com/ios/64/000000/magical-scroll.png" alt="logo"/></Link>
        </div>
      </div>
    </nav>
  )
}
