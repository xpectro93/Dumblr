import React, { Component } from 'react';
import "../../css/Dashboard.css";
// import axios from "axios"

class Dashboard extends Component {
state = {
  emailInput:"",
  userInput:'',
  passInput:''

}

onChange = e => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
onSubmit = e => {
  e.preventDefault();
  let newUserData = {
    username: this.state.userInput,
    password:this.state.passInput,
    email:this.state.emailInput
  }

  this.props.newUser(newUserData)

}


render(){

let users = this.props.users.map(user => {
  return <p key={user.id}>{user.username}</p>
})

  return(
    <div className="Dashboard">
      <div className = 'left-dash'>
      <span id='make-post'>Make post</span>
      <span id="lePost"> This is a post</span>
      </div>

      <div className="right-dash">
      <span id="recommended">Recommended</span>
      <span id="radar" >Radar</span>
      </div>

    </div>
  )
  }
}
export default Dashboard
