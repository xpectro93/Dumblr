import { combineReducers } from 'redux'
import DashboardReducer from './DashboardReducer.js'

const RootReducer  = combineReducers({
  dashboard: DashboardReducer
})

export default RootReducer;
