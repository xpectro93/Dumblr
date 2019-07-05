// import * as Util from '../util.js';
import axios from 'axios'
import Auth from "../Auth.js"

export const FETCH_USERS = "FETCH_USERS";
export const NEW_USER = "NEW_USER";
export const LOG_IN = "LOG_IN";
export const LOAD_POSTS = "LOAD_POSTS"
export const CURRENT_USER = "CURRENT_USER"
export const FETCH_TAGS = "FETCH_TAGS"
export const ALL_TAGS = "ALL_TAGS"
///////////////////////////////USER AND LOGIN USER ////////
export const logout = () => dispatch => {
  axios
    .post("/session/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {
      console.log("in logout");
      checkAuthenticateStatus();
    });
}


export const checkAuthenticateStatus = () => dispatch => {

  axios
    .get("/session/isLoggedIn").then(user => {
    if (user.data.id === +Auth.getToken()){

      dispatch({
        type:LOG_IN,
        payload:user.data
      })

      dispatch(loadCurrent())

    } else {
      if (user.data.id) {
        logout()
      } else {
        Auth.deauthenticateUser();
      }
    }
  })

  ;
}

export const newUser = newUserData => dispatch => {

  axios
  .post("/session/new", newUserData)
    .then(res => {

      dispatch({
        type:NEW_USER,
        user:res
      })

      axios
      .post("/session/login",{username:newUserData.username, password:newUserData.password})
        .then(res => {
          console.log(res);
          Auth.authenticateUser(res.data.id);
          dispatch({
            type:LOG_IN,
            payload:res.data.id
          })
        })
        .then(()=> {
          axios
            .post("/followings",{user_id:+Auth.getToken(),follower_id:+Auth.getToken()})

        })
      .then(()=> {
        console.log('in new User');
        checkAuthenticateStatus()
      })
    })

}

export const logIn = logInData => dispatch => {
  axios
  .post("/session/login", logInData)
    .then(res => {
      console.log('res of login', res.data);
      Auth.authenticateUser(res.data.id);
      dispatch({
        type:LOG_IN,
        payload:res.data
      })

    })
    .then(()=> {
      console.log('check auth at login');
      checkAuthenticateStatus();

    })
    .catch(err=> {
      console.log(err);
    })
}
export const loadCurrent = () => dispatch => {
  axios
  .get(`/users/${+Auth.getToken()}`)
    .then(res => {
      dispatch({
        type:CURRENT_USER,
        payload:res.data.body
      })
    })
    .catch(err => {
      console.log(err);
    })

}

//^^^^^^^^^^^//////END OF LOG IN AND USER TYPES//////////////////^^^^^^^^

///BEGINNING OF ACTUAL USEFUL DASHBOARD TYPES////

export const loadPosts = () => dispatch => {
  // debugger
  axios
    .get('/posts/followings')

      .then(res =>
        dispatch({
          type:LOAD_POSTS,
          posts:res.data.body
        })
      )
}

export const fetchTags =() => dispatch => {

 axios
    .get('tags/posts/')
      .then(res => {
        dispatch({
          type:FETCH_TAGS,
          payload:res.data.body
        })
      })
}
export const allTags = () => dispatch => {
  axios
    .get('/tags/')
      .then(res => {
        dispatch({
          type:ALL_TAGS,
          payload:res.data.body
        })
      })
}

export const makePost = postData => async dispatch => {
  let postFilteredData = {
      user_id:postData.user_id,
      type:postData.type,
      title:postData.title,
      post:postData.post,
      description:postData.description
  }
    let tagIds =  await arrayLoopAxios(postData.notIn)
    let partTwo = Object.values(tagIds)
    console.log('thisIsTagIds',tagIds.length)
    let alreadyIn = postData.alreadyIn
    let finalArr = partTwo.concat(alreadyIn)
    let postRes = await axios.post('/posts',postFilteredData)
    console.log('finalArr',finalArr)
    console.log('postRes',postRes.data.id)
    dispatch(loadPosts())
    // axios
    // .post('/posts',postFilteredData)
    //   .then((res)=> {
    //     console.log('post id :D',res.data.id)
    //   })
    //   .then(()=> {
    //     console.log('AlreaydIn @ actions', postData.alreadyIn)
    //
    //   console.log('Final',finalArr)
    //
    //   })
    //   .then(() => {
    //
    //     dispatch(loadPosts())
    //   })
}

///USELESS type that was used to learn redux
export const fetchUsers = () => dispatch => {
  axios
  .get("/users")
    .then(res =>
dispatch({
        type:FETCH_USERS,
        //.data the key in the res
        users:res.data.body
      }))
}

const arrayLoopAxios = arr => {
  let something;
      axios.post('/tags',{name:arr})
      .then(res => {
        console.log('THIS IS RES',res)
      })




  return;

}


// we got arr of tags  and we can look up a tag by name
// we need to match the tag in the arr to the name then add the post id with the tag id

//get tag id based on array

// const matchTags = (arr,postId) => {
//
//   //match arr tag to tag id
//   arr.map(el=> {
//     axios
//       .get(`/tags/${el}`)
//         .then(res => {
//           // tag_id,post_id
//           // res.data.body.id
//           axios
//             .post(`/tags/posts/`,{tag_id:res.data.body.id,post_id:postId})
//
//         })
//   })
//
// }
