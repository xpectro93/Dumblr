import React, {Component} from 'react';
import LoginNav from './LoginNav'
import App from '../../App.js'
import "../../css/Login.css"

class Login extends Component {
  state = {
    emailInput:"",
    userInput:'',
    passInput:'',
    logginIn:false,
    error:"Halt, you shouldn't be here. Turn bak before its too late!",
    newUser:false
  }

  componentDidMount(){

    // this.props.fetchUsers();
  }
  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmitLogIn = e => {
    e.preventDefault();
    let logInData = {
      username: this.state.userInput,
      password: this.state.passInput
    }
    this.props.logIn(logInData);


  }

  onSubmitNewUser = e => {
    e.preventDefault();
    let newuserData = {
      username: this.state.userInput,
      password:this.state.passInput,
      email:this.state.emailInput
    }

    this.props.newUser(newuserData);

    this.setState({
      username:"",
      password:"",
      email:""
    })
  }


  turnTrue =(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    console.log(this.props.isLoggedIn);
    // if(this.props.isLoggedIn){
    // <App/>
    // }else if (this.state.logginIn){
    //   login/create
    // } else if (this.state.newUser) {

  //}

  if(this.props.isLoggedIn){
  return (
    <div>
    <App/>
    </div>)
  }else if(this.state.logginIn){
      return (
        <div>
        <LoginNav/>
        <form onSubmit={this.onSubmitLogIn} className="logForm">
          <input id="sign-input" placeholder="Username"  onChange={this.onChange} type="text" name="userInput" vaue={this.state.userInput}/>
          <input className="sign-input1" placeholder="Password"  onChange={this.onChange} type="password" name="passInput" vaue={this.state.passInput}/>

          <button id="" type="submit">Log In</button>
        </form>
        </div>

      )
    }else if(this.state.newUser){
      return (
          <div>
          <LoginNav/>

        <form onSubmit={this.onSubmitNewUser} className="logForm">

          <input id="sign-input"  placeholder="Email" onChange={this.onChange} type="text" name="emailInput" vaue={this.state.emailInput}/>
          <input className="sign-input1" placeholder="Password"  onChange={this.onChange} type="password" name="passInput" vaue={this.state.passInput}/>
          <input className="sign-input1" placeholder="Username"  onChange={this.onChange} type="text" name="userInput" vaue={this.state.userInput}/>
          <button id="" type="submit">Sign Up</button>
        </form>

          </div>)
    }else {
      return (
        <div>
        <LoginNav/>
        <div className = "logForm">

        <button id="buttonStart" onClick={this.turnTrue} name="newUser" value={!this.state.newUser}>
        Get started
        </button>
        <button  id="buttonStart" name="logginIn" value={!this.state.logginIn} onClick={this.turnTrue}>
          Log In
        </button>
        </div>
        </div>


      )
    }

  }
}
export default Login
