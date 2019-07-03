import axios from 'axios'
// import Auth from "../Auth.js"
// export const LOAD_ALL = "LOAD_ALL"
export const LOAD_SEARCH = "LOAD_SEARCH"

// export const loadPosts = () => dispatch => {
//   axios
//     .get('/posts')
//       .then(res =>
//         console.log(res)
//         dispatch({
//           type:LOAD_POSTS,
//           posts:res.data.body
//         })
//       )
// }

export const loadSearch = (params) => dispatch => {
  // axios
  //   .get('')
}

export const loadAll = () => dispatch => {
  axios
    .get('/posts')
      .then(res => {
        dispatch({
          type:LOAD_ALL,
          posts:res.data.body
        })
      }


      )
}
// export const loadRand = () => dispatch => {
//   console.log("Fml2");
// }
