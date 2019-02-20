import React, { Component } from 'react';


import "../../css/Login.css"

const style = {
  width:"50px"
}
class LoginNav extends Component {

  state = {

  }

  render(){
    return(
      <nav className="logNav">
      <img src="https://pbs.twimg.com/media/CotvzQwWEAEmoJm.jpg" alt="logo" style= {style}/>
      <input type="search"/>
      </nav>
    )
  }
}

export default LoginNav
