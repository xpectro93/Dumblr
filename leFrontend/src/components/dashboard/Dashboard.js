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
  this.props.newUser(newUserData);
  this.props.fetchTags();

}
logMeOut = () => {
  this.props.logout();
  window.location = '/';
}

// <button type="submit" onClick={this.logMeOut}>logout</button>
render(){

  return(
    <div className="Dashboard">
      <div className = 'left-dash'>

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
//Components to be added later.
// <span id="recommended">Recommended</span>
// <span id="radar" >Radar</span>
