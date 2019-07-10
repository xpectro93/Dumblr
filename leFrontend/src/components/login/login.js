import React, {Component} from 'react';
import LoginNav from './LoginNav'
import App from '../../App.js'
// import "../../css/Login.css"
import  { withRouter } from 'react-router-dom'
import output from './output.gif';
// import output2 from './output2.gif';



class Login extends Component {
  state = {
    emailInput:"",
    userInput:'',
    passInput:'',
    logginIn:false,
    newUser:false
  }

  componentDidMount(){

    this.props.checkAuthenticateStatus()


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

    //redirects to dashboard
  setTimeout(()=>{
    this.props.history.push('/dashboard')
  },2000)


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
  backtotop = e => {
    this.setState({
      logginIn:false,
      newUser:false
    })
  }
  render(){

  if(this.props.isLoggedIn){
  return <App />

  }else if(this.state.logginIn){
      return (
        <div>
        <LoginNav/>
        <form onSubmit={this.onSubmitLogIn} className="logForm">

          <input id="sign-input" placeholder="Username"  onChange={this.onChange} type="text" name="userInput" vaue={this.state.userInput}/>
          <input className="sign-input1" placeholder="Password"  onChange={this.onChange} type="password" name="passInput" vaue={this.state.passInput}/>

          <button id="" type="submit">Log In</button>
          <button id="" onClick={this.backtotop}>Back</button>
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
          <button id="" onClick={this.backtotop}>Back</button>
        </form>

          </div>)
    }else {
      return (
        <div>
        <LoginNav/>
        <div className = "logForm">
        <img src={output} alt='logo'/>
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
export default withRouter(Login);
