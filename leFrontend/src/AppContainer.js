import App from "./App";
import { connect } from "react-redux";
import { fetchUsers, newUser,logIn, checkAuthenticateStatus, logout } from "./actions/DashboardActions";

import { withRouter } from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {

  return {
    isLoggedIn:state.dashboard.isLoggedIn
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    newUser: userData => dispatch(newUser(userData)),
    logIn: logInData => dispatch(logIn(logInData)),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
