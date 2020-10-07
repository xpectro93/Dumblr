
import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import {PostType} from './PostType'
import Rel from './REL.js'

let defaultUser= "https://a.1stdibscdn.com/archivesE/upload/f_30733/f_88764731508867994191/UV_master.jpg?width=768"

export default class DashboardPosts extends Component {
state = {
  allTags:[]
}
componentDidMount(){
  this.props.loadPosts()
  this.props.fetchTags()

}
embed = str => {
  let split = str.split("=")

  let final ="https://www.youtube.com/embed/"+split[1]
  return final
}
//we need a tag id. Need to fit this into the load posts so it becomes linked
getTag = id => this.props.tags.filter(tag => tag.post_id === id).map(el => el.name)

listTags = arr => {
  let tags =  arr.map(tag => {

      return <li key={tag}><Link to={`/search/tag/${tag}`} >#{tag}</Link></li>
    })
    return (
      <ul>
      {tags}
      </ul>
    )

}

render(){

  let postList = this.props.posts ? this.props.posts.map(post => {
    if(post.type === "PHOTO"){
      return (  <div id="lePost" key = {post.id}>
                <img src={post.pic_url?post.pic_url:(this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultUser)} alt="poster profile pic" />

                <div id="aPost" key={post.id}>
                  <h3>{post.username}</h3>
                <img id="post-pic" src={post.post} alt="post" />
                  <div className="post-body">

                    <div id="tags">
                    {this.listTags(this.getTag(post.id))}
                    </div>
                    <div className="bottom-post">

                    </div>
                    <Rel loadPosts={this.props.loadPosts}currentUser={this.props.currentUser.id} post={post}/>
                  </div>
                </div>
                </div>
            )
    }
    else if (post.type === "TEXT"){
      return (  <div id="lePost" key = {post.id}>
                <img src={post.pic_url?post.pic_url:(this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultUser)} alt="poster profile pic" />

                <div id="aPost" key={post.id}>
                <h3>{post.username}</h3>
                <h1>{post.title}</h1>
                <h4>{post.post}</h4>
                  <div className="post-body">

                    <div id="tags">
                    {this.listTags(this.getTag(post.id))}
                    </div>
                    <div className="bottom-post">

                    </div>
                  <Rel loadPosts={this.props.loadPosts}currentUser={this.props.currentUser.id} post={post}/>
                  </div>
                </div>
                </div>
            )
    }
    else if (post.type === "LINK"){
      return (
        <div id="lePost" key = {post.id}>
                  <img src={post.pic_url?post.pic_url:(this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultUser)} alt="poster profile pic" />

                  <div id="aPost" key={post.id}>
                  <h3>{post.username}</h3>
                  <a href={post.post}>{post.description}</a>
                    <div className="post-body">

                      <div id="tags">
                      {this.listTags(this.getTag(post.id))}
                      </div>
                      <div className="bottom-post">

                      </div>
                    <Rel loadPosts={this.props.loadPosts}currentUser={this.props.currentUser.id} post={post}/>
                    </div>
                  </div>
                  </div>
      )
    }
    else if(post.type === "VIDEO"){
      return (
        <div id="lePost" key = {post.id}>
                  <img src={post.pic_url?post.pic_url:(this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultUser)} alt="poster profile pic" />

                  <div id="aPost" key={post.id}>
                  <h3>{post.username}</h3>
                  <embed src={this.embed(post.post)} width="550px" height="400" scale="aspect" controller="true"/>
                  <p>{post.description}</p>

                    <div className="post-body">

                      <div id="tags">
                      {this.listTags(this.getTag(post.id))}
                      </div>
                      <div className="bottom-post">

                      </div>
                      <Rel loadPosts={this.props.loadPosts}currentUser={this.props.currentUser.id} post={post}/>

                    </div>
                  </div>
                  </div>
      )
    }
    else{
      return (<h1>WHAT TYPE OF POST IS THIS?</h1>)
    }
  }) : ""
  // else return empty string

  if(this.props.posts === undefined){
    return (
      <div id="lePost">
      <img src={defaultUser} alt="poster profile pic" />
      <div id="aPost">
      <h1>FOLLOW OTHER USERS TO GET POSTS DISPLAYED, FAM</h1>
      </div>
      </div>
    )
  }

  return (
    <>
    { postList }
    </>
  )

}

}
