import React, { Component } from 'react';


import "../../css/Login.css"
// import output from './output.gif';
import output1 from './output1.gif';
const style = {
  width:"50px"
}
class LoginNav extends Component {

  state = {

  }
      // <input type="search"/>
  render(){
    return(
      <nav className="logNav">
      <img src={output1} alt="logo" style={style}/>

      </nav>
    )
  }
}

export default LoginNav
