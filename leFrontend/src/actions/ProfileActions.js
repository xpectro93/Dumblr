import axios from 'axios'
export const LOAD_POSTS = "LOAD_POSTS"


export const loadPosts = () => dispatch => {
  // debugger
  axios
    .get('/api/posts/all')

      .then(res =>
        dispatch({
          type:LOAD_POSTS,
          posts:res.data.body
        })
      )
}
