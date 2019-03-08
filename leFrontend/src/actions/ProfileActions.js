import axios from 'axios'
// import Auth from "../Auth.js"
export const LOAD_POSTS = "LOAD_POSTS"


export const loadPosts = () => dispatch => {
  // debugger
  axios
    .get('/posts/all')

      .then(res =>
        dispatch({
          type:LOAD_POSTS,
          posts:res.data.body
        })
      )
}
