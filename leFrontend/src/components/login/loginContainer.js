import Login from "./login";
import { connect } from "react-redux";
import { fetchUsers, newUser,logIn } from "../../actions/DashboardActions";


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    users: state.dashboard.users,
    user:state.dashboard.user,
    isLoggedIn:state.dashboard.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    newUser: userData => dispatch(newUser(userData)),
    logIn: logInData => dispatch(logIn(logInData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
