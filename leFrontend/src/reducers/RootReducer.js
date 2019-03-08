import { combineReducers } from 'redux'
import DashboardReducer from './DashboardReducer.js'
import ProfileReducer from './ProfileReducer.js'
import ExploreReducer from './ExploreReducer'
// import LoginReducer from './LoginReducer.js'

const RootReducer  = combineReducers({
  dashboard: DashboardReducer,
  profile:ProfileReducer,
  explore:ExploreReducer
  // ,
  // login:LoginReducer
})

export default RootReducer;
