import dashboard from "./dashboard";
import { connect } from "react-redux";
import { fetchdUsers } from "../../actions/DashboardActions";


const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
