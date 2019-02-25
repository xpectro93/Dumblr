// import * as Util from '../util.js';
import axios from 'axios'
import Auth from "../Auth.js"

export const FETCH_USERS = "FETCH_USERS";
export const NEW_USER = "NEW_USER";
export const LOG_IN = "LOG_IN";

export const logout = () => dispatch => {
  axios
    .post("/users/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {
      checkAuthenticateStatus();
    });
}


const checkAuthenticateStatus = () => dispatch => {
  axios
    .get("/users/isLoggedIn").then(user => {

    if (user.data.username === Auth.getToken()) {


      // this.setState({
      //   isLoggedIn: Auth.isUserAuthenticated(),
      //   username: Auth.getToken()
      // });


    } else {
      if (user.data.username) {
        logout()
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};

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
export const newUser = newUserData => dispatch => {

  // e.preventDefault();
  //
  // await axios.post("/users/new",  newUserData);
  //
  // Auth.authenticateUser(username.newUserData);
  //
  // await axios.post("/users/login", { username.newUserData, password.newuserData });
  //
  // await this.props.checkAuthenticateStatus();



  axios
  .post("http://localhost:3100/session/new", newUserData)
    .then(res => {

      Auth.authenticateUser(newUserData.username)
      dispatch({
        type:NEW_USER,
        user:res
      })
    })


}

export const logIn = logInData => dispatch => {
  axios
  .post("http://localhost:3100/session/login", logInData)
    .then(res => {
      Auth.authenticateUser(logInData.username);
      dispatch({
        type:LOG_IN,
        payload:res.data
      })
    })
    .then(()=> {
      checkAuthenticateStatus();
    })


}
