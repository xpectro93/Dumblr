import * as Util from '../util.js';
export const RECEIVE_USERS = "RECEIVE_USERS";
// import axios from 'axios'

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users:users
  }
}

export const fetchUsers = () => dispatch => {
  // axios
  //   .get("http://localhost:3100/users")
  //     .then(user =>
  //       dispatch({
  //         type
  //       }))

   Util.getUsers().then(user => {
    return dispatch(receiveUsers(user.body))
  });
};
