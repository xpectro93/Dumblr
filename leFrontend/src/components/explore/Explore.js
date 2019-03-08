import React, { Component } from 'react';
import "../../css/Explore.css";
// import axios from "axios"

class Explore extends Component {
state = {
  emailInput:"",
  userInput:'',
  passInput:''

}
componentDidMount(){
  this.props.loadAll()
  // this.props.loadRand()
}






render(){
  console.log(this.props.posts)

  return(
    <div className="Explore">
      <h1>You are exploring</h1>


    </div>
  )
  }
}
export default Explore
