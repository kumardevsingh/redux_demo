import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {nameReducer} from './reducers/nameReducer';
import{wishReducer} from './reducers/wishReducer';
import thunk from 'redux-thunk';

const masterReduser = combineReducers({
  "name":nameReducer,
  "wish" : wishReducer
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReduser,{name:'name not found',wish:['eat']},composeEnhancers(applyMiddleware(thunk)));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
   <Provider store = {store}><App /></Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
