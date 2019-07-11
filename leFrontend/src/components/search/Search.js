import React, { Component } from 'react';
import "../../css/Search.css"
import Rel from '../../components/dashboard/REL.js'
import axios from 'axios'
let defaultUser= "https://a.1stdibscdn.com/archivesE/upload/f_30733/f_88764731508867994191/UV_master.jpg?width=768"

// const styles = {
//   width:"200px",
//   height:"200px",
//   "background-color":"red"
// }
export default class  Search extends Component {
  state = {
    posts:[]
  }
  async componentDidMount(){
    let tagId = await axios.get(`/tags/${this.props.match.params.id}`)
    let tagLinks = await axios.get(`/tags/posts/links/${tagId.data.body[0].id}`)
    await this.setState({
      posts:tagLinks.data.body
    })
  }


  render(){
    let {posts} = this.state
    console.log(posts)
    let postList = posts ? posts.map(post => {

      if(post.type ==="PHOTO"){
        return (  <div id="lePost" key = {post.id}>
                  <img src={post.pic_url?post.pic_url:(defaultUser)} alt="poster profile pic" />

                  <div id="aPost" key={post.id}>
                    <h3>{post.username}</h3>
                  <img id="post-pic" src={post.post} alt="post" />
                    <div className="post-body">


                      <div className="bottom-post">

                      </div>

                    </div>
                  </div>
                  </div>
              )
      }
    }):''
    // let postList =this.state.posts.map(post => {
    //   <h1>Hello</h1>
    // })



    return (
      <div className ='endMe'>

      <h1>{this.props.match.params.id.toUpperCase()?this.props.match.params.id.toUpperCase():'wait for it'} </h1>
      {postList}
    </div>
  )

  }
}
