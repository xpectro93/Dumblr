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

    let postRes = await axios.post('/posts',postFilteredData)
    let resp = await dispatch(linkPostwithTags(postRes.data.id, postData.tags));
    console.log(resp)
    dispatch(loadPosts())

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

export const arrayLoopAxios =  arr => async dispatch => {

    let promises = [];
    arr.forEach( tag => {
     let req =  axios({
       method: 'POST',
       url:`/tags`,
       data: {name:tag}
     })
     promises.push(req)
    })
    let results = await axios.all(promises)

    return results
}
export const linkPostwithTags = (id,tags) => async dispatch => {

 let promises = [];
 tags.forEach( tag => {
   let req =  axios({
     method: 'POST',
     url:`/tags/posts`,
     data: {tag_id:tag, post_id:id}
   })
   promises.push(req)
 })
 await axios.all(promises)
 return true;
}
