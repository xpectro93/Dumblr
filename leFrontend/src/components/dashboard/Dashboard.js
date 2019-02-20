import React, { Component } from 'react';
import "../../css/Dashboard.css";
import axios from "axios"

class Dashboard extends Component {
state = {
  something:[]
}

componentDidMount(){
axios.get('/users')
  .then(res => {

    console.log(res);

  })
  .catch(err => {
    console.log(err.response)
  })
}

render(){
console.log(this.state.something)

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
