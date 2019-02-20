import * as Util from '../util.js';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users:users
  }
}

export const fetchUsers = () => dispatch => {
  return Util.getUsers().then(user => {
    return dispatch(receiveUsers(user.body))
  });
};
