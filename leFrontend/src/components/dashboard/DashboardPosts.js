import React, { Component } from 'react';

export default class DashboardPosts extends Component {

componentDidMount(){
  this.props.loadPosts()
  // this.props.fetchUsers()
}

render(){
  console.log(this.props.users[2]);
  let something=this.props.posts.map(post => {

    return (<div id="lePost">
          <img src={post.pic_url}alt="test" />
          <h1 id="aPost" key={post.id}>I DID IT</h1>
            </div>
          )
  })

  return (
    <>
    {something}
    </>
  )
}

}
