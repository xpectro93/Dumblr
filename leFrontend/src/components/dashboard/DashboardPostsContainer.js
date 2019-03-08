import DashboardPosts from "./DashboardPosts";
import { connect } from "react-redux";
import {checkAuthenticateStatus, loadPosts,fetchUsers,fetchTags } from "../../actions/DashboardActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.dashboard.posts,
    users:state.dashboard.users,
    tags:state.dashboard.tags,
    currentUser:state.dashboard.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    loadPosts: () => dispatch(loadPosts()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTags:() => dispatch(fetchTags())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPosts));
