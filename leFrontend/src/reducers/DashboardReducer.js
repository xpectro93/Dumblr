import { FETCH_USERS, NEW_USER, LOG_IN } from '../actions/DashboardActions';
import Auth  from '../Auth.js'
// const normalizeData = arr => {
//   let obj = {};
//   arr.forEach(item => {
//     obj[item.id] = item;
//   });
//   return obj
// }

const initialState = {
  users: [],
  user: {},
  isLoggedIn: null,
  userId: null,
  username:null

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
      return {
        ...state,
          user :action.user
      }
    case LOG_IN:
      return {
        ...state,
        userId:action.payload.id,
        username:action.payload.username,
        isLoggedIn:Auth.isUserAuthenticated()
      }
    default:
      return state
  }
}

export default DashboardReducer
