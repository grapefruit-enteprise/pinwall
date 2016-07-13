import React from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Login from '../components/login.js';
import NavBar from '../components/navbar.js';
import Wall from '../components/wall.js';
import Note from '../components/note.js';
import LandingPage from '../components/landing-page.js';

export default (
<Router history={browserHistory} >
  <Route path="/" component={LandingPage} />
  <Route path="/:org" component={NavBar}>
    <IndexRoute component={Wall} />
    <Route path="/:org" component={Wall} />
    <Route path="/:org/read/:noteId" component={Note} />
    <Route path="/:org/write" component={Note} /> //placeholder
    <Route path="/:org/edit/:noteId" component={Note} /> //placeholder
  </Route>
</Router>
);
