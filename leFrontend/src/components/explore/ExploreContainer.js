import Explore from "./Explore";
import { connect } from "react-redux";
import  { loadPosts } from  "../../actions/DashboardActions"
import { checkAuthenticateStatus } from "../../actions/DashboardActions"

import { withRouter } from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {

  return {
    posts:state.dashboard.posts,
    currentUser:state.dashboard.currentUser
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPosts: () =>dispatch(loadPosts()),
    checkAuthenticateStatus:()=>dispatch(checkAuthenticateStatus())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore));
