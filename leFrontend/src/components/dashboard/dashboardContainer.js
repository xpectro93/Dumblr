import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { fetchUsers, newUser, checkAuthenticateStatus, logout, loadCurrent } from "../../actions/DashboardActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.dashboard.users,
    user:state.dashboard.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

    fetchUsers: () => dispatch(fetchUsers()),
    newUser: userData => dispatch(newUser(userData)),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    logout: () => dispatch(logout()),
    loadCurrent: () => dispatch(loadCurrent())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
