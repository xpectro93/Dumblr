import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/LoginActions.js';

const initialState = {
  currentUser: null,
  errors: [],
};

const LoginReducer = (state = initialState, action) => {

  Object.freeze(state);
  let newState;

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, {currentUser: action.user});
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, {errors: action.errors});
      return newState;
    case CLEAR_ERRORS:
      newState = Object.assign({}, state, {errors: []});
      return newState;
    default:
      return state;
  }

};

export default LoginReducer;
