import Profile from "./Profile";
import { connect } from "react-redux";
import { loadPosts } from "../../actions/ProfileActions";
import { checkAuthenticateStatus, logout } from "../../actions/DashboardActions"

import { withRouter } from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {

  return {
    posts:state.profile.posts,
    currentUser:state.dashboard.currentUser

  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    loadPosts:()=>dispatch(loadPosts()),
    checkAuthenticateStatus:()=>dispatch(checkAuthenticateStatus())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
