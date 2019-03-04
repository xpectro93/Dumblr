import React, { Component } from 'react';


export default class MakePost extends Component {

  componentDidMount(){
    this.props.checkAuthenticateStatus()
  }
  render(){

    return(
      <div id="make-postBox">
      <img src={this.props.currentUser.pic_url}alt="test"/>
      <div id='make-post' >
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/text-box.png" alt="text post"/></span>
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/compact-camera.png" alt="post"/></span>
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/link.png" alt="link post"/></span>
      </div>
      </div>
    )
  }

}
