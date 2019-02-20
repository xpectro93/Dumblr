import { RECEIVE_USERS } from '../actions/DashboardActions';

const normalizeData = arr => {
  let obj = {};
  arr.forEach(item => {
    obj[item.id] = item;
  });
  return obj
}



const DashboardReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return normalizeData(action.users)
    default:
      return oldState
  }
}

export default DashboardReducer
