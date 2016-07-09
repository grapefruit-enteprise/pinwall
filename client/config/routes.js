import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from '../components/login.js';
import NavBar from '../components/navbar.js';
import Wall from '../components/wall.js';
import Note from '../components/note.js';

export default (<Router history={browserHistory} >
  <IndexRoute component={Login} />
  <Route path="/" component={NavBar}>
    <Route path="/:org/:category" component={Wall} />
    <Route path="/:org/:category/:noteId" component={Note} />
  </Route>
</ Router>
);
