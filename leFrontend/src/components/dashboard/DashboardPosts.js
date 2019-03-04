
import React, { Component } from 'react';
import axios from 'axios'


export default class DashboardPosts extends Component {

componentDidMount(){
  this.props.loadPosts()
// axios
//   .get('/tags/posts')
//     .then(res => {
//       console.log(res);
//           })
}
getTag =(id)=> {
  let tagList=[];
  let final;
  axios
    .get(`/tags/posts/${id}`)
      .then(res => {
        // console.log(res);
res.data.body.forEach(tag => {

      // console.log(tag);

tagList.push(tag.name)
  })
  })

  return typeof tagList
}

// var myArr = [];
//
// var input = {two: 2, four: 4, three: 3, twelve: 12};
//
// for (var k in input) {
//     myArr.push(input[k]);
// }

render(){
console.log(this.getTag(7))

  function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

  let postList=this.props.posts.map(post => {
      return (<div id="lePost" key = {post.id}>
            <img src={post.pic_url}alt="poster profile pic" />
            <div id="aPost" key={post.id}>
            <b>{post.username}</b>
            <p>afds </p>

            </div>
              </div>
            )


  })


  return (
    <>
    {shuffle(postList)}
    </>
  )
}

}
