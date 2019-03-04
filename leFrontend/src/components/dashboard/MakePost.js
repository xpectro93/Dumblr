import React, { Component } from 'react';


export default class MakePost extends Component {

  render(){
    return(
      <div id="make-postBox">
      <img src="https://yt3.ggpht.com/a-/AAuE7mCfd0RTH4u5MB7S8TcVJpMyqIl6Vuj6plsj8g=s900-mo-c-c0xffffffff-rj-k-no"alt="test"/>
      <div id='make-post' >
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/text-box.png" alt="text post"/></span>
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/compact-camera.png" alt="post"/></span>
        <span id="post-type" ><img src="https://img.icons8.com/nolan/64/000000/link.png" alt="link post"/></span>
      </div>
      </div>
    )
  }

}
