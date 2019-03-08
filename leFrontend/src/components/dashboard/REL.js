import React, {Component} from 'react'
import axios from 'axios'
//follow, reblog,edit/delete

const clicked = "https://img.icons8.com/dusk/64/000000/like.png"
const unclicked = "https://img.icons8.com/nolan/64/000000/like.png"

const style = {
  width:"30px",
  height:"30px"
}


export default class Rel extends Component {
  constructor(props){
    super(props)
    this.state ={
      liked:false,
      edit:false

    }
  }
  onClick = e => {
    e.preventDefault();
    if(this.state.liked){
      this.setState({
        liked:false
      })
    }else {

    let likeData = {
      user_id:this.props.currentUser,
      post_id:this.props.post.id
    }

    axios
      .post("/likes/",likeData)
        .then(res => {
          console.log(res);
        })
        this.setState({
          liked:true
        })
    }
  }
  onClickEdit = e => {
    e.preventDefault();
    this.setState({
        edit:!this.state.edit
    })
  }
  deletePost = e => {
    e.preventDefault();
    axios
    .delete(`/posts/${this.props.post.id}`)
      .then(res => {
        console.log(res);
      })
      .then(()=> {
        this.props.loadPosts()
      })
  }


render(){


if(this.props.currentUser===this.props.post.user_id){
  if(this.state.edit){
    return (
      <>
      <span><img style={style}src="https://img.icons8.com/nolan/64/000000/edit.png" alt="edit"/></span>
      <span onClick={this.deletePost}><img style={style}src="https://img.icons8.com/nolan/64/000000/trash.png" alt="delete"/></span>
      </>
    )
  }else {
    return(
      <>
      <span onClick={this.onClickEdit}><img style={style}src="https://img.icons8.com/nolan/64/000000/settings-3.png" alt="edit"/></span>
      </>
    )
  }

}else {
  return (<span onClick={this.onClick}> {this.state.liked?<img style={style}src={clicked} alt="clicked"/>:<img style ={style} src={unclicked} alt="unclicked"/>}</span>)
}



}

}
