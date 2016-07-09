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

import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Login from './components/login.js';
import NavBar from './components/navbar.js';
import Wall from './components/wall.js';
import Note from './components/note.js';

//import reducers from './reducers';

// const appStore = applyMiddleware(ReduxPromise)(createStore);
// <Provider store={appStore(reducers)}>
//
// </Provider>

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={NavBar}>
      <IndexRoute component={Login} />
      <Route path="/wall" component={Wall} />
        <Route path="/wall/:category" component={Wall} />
        <Route path="/wall/:category/:noteId" component={Note} />
    </Route>
  </ Router>
    , document.getElementById('app'));
