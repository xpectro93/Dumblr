import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/login'

import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/RootReducer'


import logger from 'redux-logger';
import  thunk  from 'redux-thunk';

import { Provider } from 'react-redux';

let store =createStore(RootReducer, { }, compose(applyMiddleware(thunk, logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));



ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
