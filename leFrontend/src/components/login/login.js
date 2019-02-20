import React, {Component} from 'react';
import LoginNav from './LoginNav'
import App from '../../App.js'
import "../../css/Login.css"
// import { Link } from 'react-router-dom'


class Login extends Component {
  state = {
    emailInput:"",
    userInput:'',
    passInput:'',
    isloggedIn:false,
    error:"Halt, you shouldn't be here. Turn before its too late!",
    newUser:false
  }

  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

  }
  turnTrue =(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){
    if(this.state.isloggedIn){
      return (

         <App/>

      )
    }else if(this.state.newUser){
      return (
          <div>
          <LoginNav/>

        <form onSubmit={this.onSubmit} className="logForm">
          <input id="sign-input"  placeholder="email" onChange={this.onChange} type="text" name="emailInput" vaue={this.state.emailInput}/>
          <input id="sign-input1" placeholder="password"  onChange={this.onChange} type="password" name="passInput" vaue={this.state.passInput}/>
          <input id="sign-input1" placeholder="username"  onChange={this.onChange} type="text" name="userInput" vaue={this.state.userInput}/>
          <button id="" type="submit">Sign Up</button>
        </form>

          </div>)
    }else {
      return (
        <div>
        <LoginNav/>
        <div className = "logForm">
        <button onClick={this.turnTrue} name="newUser" value={!this.state.newUser}>
        Get started
        </button>
        <button name="isloggedIn" value={!this.state.isloggedIn} onClick={this.turnTrue}>
          Log In
        </button>
        </div>
        </div>


      )
    }

  }
}
export default Login
