import DashboardPosts from "./DashboardPosts";
import { connect } from "react-redux";
import {checkAuthenticateStatus, loadPosts,fetchUsers,loadCurrent } from "../../actions/DashboardActions";
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
    loadPosts: () => dispatch(loadPosts()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    fetchUsers: () => dispatch(fetchUsers()),
    loadCurrent

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPosts));
