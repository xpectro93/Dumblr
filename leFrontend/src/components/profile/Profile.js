import React, {Component} from 'react';
import "../../css/Profile.css"
import MakePostContainer from '../dashboard/MakePostContainer'
import DashboardPostsContainer from '../dashboard/DashboardPostsContainer'
import { withRouter } from 'react-router-dom'


class Profile extends Component {
  state = {
    emailInput:"",
    userInput:'',
    passInput:'',
    logginIn:false,
    newUser:false
  }

  componentDidMount(){
    this.props.logout()
    this.props.checkAuthenticateStatus()
    this.props.loadPosts()


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

  turnTrue =(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  logMeOut = () => {
    // this.props.logout()
    this.props.checkAuthenticateStatus()
    this.props.history.push("/Login")
  }
  render(){
    console.log(this.props.posts);
    return(
      <>
      <div className ="profile">
      <div className="Dashboard">
        <div className = 'left-dash'>
        <button type="submit" onClick={this.props.logout()}>logout</button>
          <MakePostContainer />
          <DashboardPostsContainer/>

        </div>

        <div className="right-dash">
        <span id="recommended">Recommended</span>
        <span id="radar" >Radar</span>
        </div>



      </div>
      </div>

      </>
    )

  }
}
export default withRouter(Profile);
