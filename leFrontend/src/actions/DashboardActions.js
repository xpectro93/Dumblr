// import * as Util from '../util.js';
import axios from 'axios'

export const FETCH_USERS = "FETCH_USERS";
export const NEW_USER = "NEW_USER"


export const fetchUsers = () => dispatch => {
  axios
  .get("http://localhost:3100/users")
    .then(res =>
      dispatch({
        type:FETCH_USERS,
        //.data the key in the res
        users:res.data.body
      }))
}
