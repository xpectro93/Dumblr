import { combineReducers } from 'redux'
import DashboardReducer from './DashboardReducer.js'
// import LoginReducer from './LoginReducer.js'

const RootReducer  = combineReducers({
  dashboard: DashboardReducer
  // ,
  // login:LoginReducer
})

export default RootReducer;
