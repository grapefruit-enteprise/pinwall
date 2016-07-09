import React from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Login from '../components/login.js';
import NavBar from '../components/navbar.js';
import Wall from '../components/wall.js';
import Note from '../components/note.js';

export default (
<Router history={hashHistory} >
  <Route path="/" component={NavBar}>
    <IndexRoute component={Login} />
    <Route path="/wall" component={Wall} />
    <Route path="/:org/:category" component={Wall} />
    <Route path="/:org/:category/:noteId" component={Note} />
  </Route>
</ Router>
);


//{/*<IndexRoute component={Login} />*/}
