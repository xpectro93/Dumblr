import Explore from "./Explore";
import { connect } from "react-redux";
// import { loadPosts } from "../../actions/ExploreActions";
import { loadAll, loadRand } from '../../actions/ExploreActions'
import { checkAuthenticateStatus } from "../../actions/DashboardActions"

import { withRouter } from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {

  return {
    posts:state.explore.posts,
    currentUser:state.dashboard.currentUser
//
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAll: () => dispatch(loadAll()),
    loadRand:() =>dispatch(loadRand()),
    checkAuthenticateStatus:()=>dispatch(checkAuthenticateStatus())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore));
