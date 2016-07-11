import React from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Login from '../components/login.js';
import NavBar from '../components/navbar.js';
import Wall from '../components/wall.js';
import Note from '../components/note.js';

export default (
<Router history={browserHistory} >
  <Route path="/" component={NavBar}>
    <IndexRoute component={Login} />
    <Route path="/:org" component={Wall} />
    <Route path="/:org/read/:noteId" component={Note} />
    <Route path="/:org/write" component={Note} /> //placeholder
    <Route path="/:org/edit/:noteId" component={Note} /> //placeholder
  </Route>
</Router>
);

//When organization authorization is implemented, remove path /wall from line 12 and change wall to :org in line 14

//{/*<IndexRoute component={Login} />*/}
// <Route path="/wall" component={Wall} />
