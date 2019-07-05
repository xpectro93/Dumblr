import MakePost from "./MakePost";
import { connect } from "react-redux";
import {fetchUsers, checkAuthenticateStatus, makePost, allTags, arrayLoopAxios, loadPosts } from "../../actions/DashboardActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.dashboard.posts,
    users:state.dashboard.users,
    currentUser:state.dashboard.currentUser,
    allTags:state.dashboard.allTags
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchUsers: () => dispatch(fetchUsers()),
    checkAuthenticateStatus:() => dispatch(checkAuthenticateStatus()),
    makePost: postData => dispatch(makePost(postData)),
    getAllTags: () => dispatch(allTags()),
    arrayLoopAxios: arr => dispatch(arrayLoopAxios(arr)),
    loadPosts: () => dispatch(loadPosts())

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MakePost));
