import { FETCH_USERS, NEW_USER, LOG_IN, LOAD_POSTS, CURRENT_USER, FETCH_TAGS } from '../actions/DashboardActions';
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
  username:null,
  email:"",
  bio:"",
  currentUser: {
  pic_url:"https://bloximages.newyork1.vip.townnews.com/kentwired.com/content/tncms/assets/v3/editorial/f/95/f95384b0-edfc-59b2-8b1e-4a6f2c3bc61c/52c5029f44428.image.jpg"
  },
  posts:[],
  tags: []

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
        userId: +Auth.getToken(),
        username:action.payload.id,
        isLoggedIn:Auth.isUserAuthenticated()
      }

    case LOAD_POSTS:
      return {
        ...state,
        posts:action.posts
      }
    case CURRENT_USER:
      return {
        ...state,
        currentUser:action.payload
      }
    case FETCH_TAGS:
    return {
      ...state,
      tags:action.payload
    }

    default:
      return state
  }
}

export default DashboardReducer
