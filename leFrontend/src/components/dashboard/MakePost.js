import React, { Component } from 'react';
import axios from 'axios'



const defaultPic ="https://a.1stdibscdn.com/archivesE/upload/f_30733/f_88764731508867994191/UV_master.jpg?width=768"
export default class MakePost extends Component {
  state = {
    type:"",
    title: "",
    post:"",
    caption:"",
    tags: "",
    description:""

  }
  componentDidMount(){
    this.props.checkAuthenticateStatus()
    this.props.getAllTags()
  }
  onClickText = e => {

    this.setState({
      type:"TEXT"
    })

  }
  onClickPhoto = e => {

    this.setState({
      type:"PHOTO"
    })

  }
  onClickLink = e => {

    this.setState({
      type:"LINK"
    })

  }
  onClickVideo= e => {

    this.setState({
      type:"VIDEO"
    })

  }
  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmitPost = e => {
    e.preventDefault();

    let tagArr;
    let answer;
    tagArr =this.state.tags.split(" ").filter(Boolean)
    tagArr = tagArr.map(tag => tag.replace('#',''))
    //has ids of tags already in;
    let alreadyIn = []
    //has tags that need to be added;
    let notIn = []

    //adds to alreadyIn and notIn arrays
    tagArr.forEach(tag => {
      if(this.props.allTags[tag]){
        alreadyIn.push(this.props.allTags[tag])
      }else{
        notIn.push(tag)
      }
    })
    console.log('alreadyIn', alreadyIn)


    let postData = {
      user_id:this.props.currentUser.id,
      title:this.state.title,
      post: this.state.post,
      notIn:notIn,
      alreadyIn:alreadyIn,
      type:this.state.type,
      description:this.state.description.length === 0 ? null:this.state.description
    }

    this.props.makePost(postData)
    this.setState({
      type:"",
      title: "",
      post:"",
      caption:"",
      tags: ""
    })
  }

  typeNull = (e) => {
    e.preventDefault();
    this.setState({
      type:""
    })
  }
  render(){
    // console.log(this.props.allTags)

    if(this.state.type==="TEXT"){
      return (
        <div id="make-postBox">
        <img src={this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultPic}alt="test"/>

        <div id="make-post">

        <form className="post-form" onSubmit={this.onSubmitPost}>
          <h2>{this.props.currentUser.username}</h2>
          <input id="post-form-title" placeholder="Title"  onChange={this.onChange} type="text" name="title"/>

          <textarea rows="4" cols="50" id="post-form-post" placeholder="Your text here" onChange={this.onChange} type="textarea" name="post"></textarea>
          <input id="post-form-tags" placeholder="#tags"  onChange={this.onChange} type="text" name="tags"/>
              <div id="submit-form">
              <button onClick={this.typeNull}>Cancel</button><button type="submit" id="submit">Post</button>
              </div>
        </form>

        </div>

        </div>
      )
    }else if(this.state.type==="PHOTO") {
      return (
        <div id="make-postBox">
        <img src={this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultPic}alt="test"/>
        <div id="make-post">

        <form className="post-form" onSubmit={this.onSubmitPost}>
          <h2>{this.props.currentUser.username}</h2>
          <textarea rows="1" cols="50" id="post-form-post" placeholder="Insert Picture Url" onChange={this.onChange} type="textarea" name="post"></textarea>
          <input id="post-form-tags" placeholder="#tags"  onChange={this.onChange} type="text" name="tags"/>
          <div id="submit-form">
              <button onClick={this.typeNull}>Cancel</button><button type="submit" id="submit">Post</button>
              </div>
        </form>



        </div>
        </div>
      )
    }else if(this.state.type==="LINK"){
      return (
        <div id="make-postBox">
        <img src={this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultPic}alt="test"/>
        <div id="make-post">

        <form className="post-form" onSubmit={this.onSubmitPost}>
          <h2>{this.props.currentUser.username}</h2>
          <input id="post-form-tags" placeholder="Add Link here"  onChange={this.onChange} type="text" name="post"/>
          <textarea rows="1" cols="50" id="post-form-post" placeholder="Add description, if you like..." onChange={this.onChange} type="textarea" name="description"></textarea>

          <input id="post-form-tags" placeholder="#tags"  onChange={this.onChange} type="text" name="tags"/>
          <div id="submit-form">
              <button onClick={this.typeNull}>Cancel</button><button type="submit" id="submit">Post</button>
              </div>
        </form>



        </div>
        </div>
      )
    }else if(this.state.type==="VIDEO"){
      return (
        <div id="make-postBox">
        <img src={this.props.currentUser.pic_url?this.props.currentUser.pic_url:defaultPic}alt="test"/>
        <div id="make-post">

        <form className="post-form" onSubmit={this.onSubmitPost}>
          <h2>{this.props.currentUser.username}</h2>
          <input id="post-form-tags" placeholder="Add Video Link here"  onChange={this.onChange} type="text" name="post"/>
          <textarea rows="1" cols="50" id="post-form-post" placeholder="Add description, if you like..." onChange={this.onChange} type="textarea" name="description"></textarea>

          <input id="post-form-tags" placeholder="#tags"  onChange={this.onChange} type="text" name="tags"/>
          <div id="submit-form">
              <button onClick={this.typeNull}>Cancel</button><button type="submit" id="submit">Post</button>
              </div>
        </form>



        </div>
        </div>
      )
    }
    else {
      return(
        <div id="make-postBox">
              <img src={this.props.currentUser.pic_url?this.props.currentUser.pic_url:"https://a.1stdibscdn.com/archivesE/upload/f_30733/f_88764731508867994191/UV_master.jpg?width=768"}alt="test"/>
            <div id='make-post' >
              <span onClick={this.onClickText}  id="post-type"><img src="https://img.icons8.com/nolan/64/000000/text-box.png" alt="text post"/></span>
              <span onClick={this.onClickPhoto} id="post-type"><img src="https://img.icons8.com/nolan/64/000000/compact-camera.png" alt="post"/></span>
              <span onClick={this.onClickLink}  id="post-type"><img src="https://img.icons8.com/nolan/64/000000/link.png" alt="link post"/></span>
              <span onClick={this.onClickVideo} id="post-type"><img src="https://img.icons8.com/nolan/64/000000/camcorder-pro.png" alt="video post"/></span>
            </div>

        </div>

      )
    }

  }

}
