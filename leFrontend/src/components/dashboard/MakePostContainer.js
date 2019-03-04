import MakePost from "./MakePost";
import { connect } from "react-redux";
import {fetchUsers, checkAuthenticateStatus } from "../../actions/DashboardActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.dashboard.posts,
    users:state.dashboard.users,
    currentUser:state.dashboard.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchUsers: () => dispatch(fetchUsers()),
    checkAuthenticateStatus:()=>dispatch(checkAuthenticateStatus())

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MakePost));
