import React, { Component } from 'react';
import "../../css/Dashboard.css";
import { withRouter } from 'react-router'

//Containers
import MakePostContainer from './MakePostContainer'
import DashboardPostsContainer from './DashboardPostsContainer'


class Dashboard extends Component {
state = {
  emailInput:"",
  userInput:'',
  passInput:'',
  isOpen:false

}

componentDidMount(){
  this.props.checkAuthenticateStatus()
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
logMeOut = () => {
  this.props.logout()
  // this.props.checkAuthenticateStatus()
  window.location='/'
}


render(){

// let users = this.props.users.map(user => {
//   return <p key={user.id}>{user.username}</p>
// })
// <span id='make-post'>Make post</span>
// <span id="lePost"> This is a post, this is green</span>

  return(
    <div className="Dashboard">
      <div className = 'left-dash'>
      <button type="submit" onClick={this.logMeOut}>logout</button>
        <MakePostContainer />
        <DashboardPostsContainer/>

      </div>

      <div className="right-dash">

      </div>



    </div>
  )
  }
}
export default withRouter(Dashboard)

// <span id="recommended">Recommended</span>
// <span id="radar" >Radar</span>
