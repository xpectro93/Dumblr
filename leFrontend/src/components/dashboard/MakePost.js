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
    description:"",
    promises:{}

  }
  componentDidMount(){
    this.props.checkAuthenticateStatus()
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
  //we get an array of tags that want to be added
  //we check which tags exist, if they exist, we get the id.
  // if they dont we create them and then get their id.
  //Put those ids in a request alonside the post number
  //once linked we have our sucessful post

  onSubmitPost = e => {

    e.preventDefault();
    //removes hashtag on tags if they contain them
    let tagArr;
    let answer;
    tagArr =this.state.tags.split(" ").filter(Boolean)
    tagArr = tagArr.map(tag=> tag.replace('#',''))
    console.log('TarArr',tagArr);



    // this.getTags(tagArr)

    let postData = {
      user_id:this.props.currentUser.id,
      title:this.state.title,
      post: this.state.post,
      tags:tagArr,
      type:this.state.type,
      description:this.state.description.length === 0 ?null:this.state.description
    }

    console.log(postData);
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
  getTags = (tagArray) => {

    // let promises = []
    // tagArray.forEach(tagName => {
    //   let req = axios({
    //     url:`/tags/${tagName}`
    //   })
    //
    //   promises.push(req)
    // })
    //   return Promise.all(promises)
    //   .then(res => {
    //       this.setState({
    //         promises:res
    //       })
    //       console.log(this.state.promises);
    //   })

  }
  getTags = () => {

  }
  doesTagExist = tagArr => {

  }

  render(){

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
