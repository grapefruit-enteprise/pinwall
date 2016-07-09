// var React = require('react');
// var ReactDOM = require('react-dom');
//
// class Test extends React.Component {
//   render(){
//     return (
//       <div> Test123 </div>
//     )
//   }
// }
//
//
// ReactDOM.render(<Test />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers/root-reducer.js';

const appStore = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render((
      <Provider store={appStore(rootReducer)}>
        {routes}
      </Provider>
        ), document.getElementById('app'));
