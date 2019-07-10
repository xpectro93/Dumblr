import React, { Component } from 'react';
import M from 'materialize-css'

class Explore extends Component {
state = {
  posts:[]
}
componentDidMount(){
  this.props.loadPosts()
  document.addEventListener('DOMContentLoaded', function () {
     var elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems);
   });
}
render(){

  return(

    <h1>Exploring</h1>

  )
  }
}
export default Explore
