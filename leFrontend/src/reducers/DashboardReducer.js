import { FETCH_USERS, NEW_USER } from '../actions/DashboardActions';

// const normalizeData = arr => {
//   let obj = {};
//   arr.forEach(item => {
//     obj[item.id] = item;
//   });
//   return obj
// }

const initialState = {
  users: [],
  user: {}
}


const DashboardReducer = (state = initialState , action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_USERS:
    //users refers to the payload
      return {
        ...state,
          users :action.users
      }
    case NEW_USER:
      return;
    default:
      return state
  }
}

export default DashboardReducer
