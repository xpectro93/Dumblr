import axios from 'axios'
export const LOAD_SEARCH = "LOAD_SEARCH"

export const loadAll = () => dispatch => {
  axios
    .get('/api/posts')
      .then(res => {
        dispatch({
          type:LOAD_ALL,
          posts:res.data.body
        })
      }


      )
}
