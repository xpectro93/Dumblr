import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/DashboardActions";


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    users: state.dashboard.users
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
)(Dashboard);
