import React          from 'react';
import { AUTH_USER }  from './actions/types';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// components and reducers from our app
import App          from './components/app';
import Welcome      from './components/welcome';
import RequireAuth  from './components/auth/require_auth';
import Signin       from './components/auth/signin';
import Signup       from './components/auth/signup';
import Wall         from './components/wall';
import Note         from './components/notes/show-note';
import NoteForm     from './components/notes/note-form';
import NoteFormEdit from './components/notes/note-form-edit';
import reducers     from './reducers';

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="signin"  component={Signin} />
      <Route path="signup"  component={Signup} />
      <Route path="organizations/:orgId" component={RequireAuth(Wall)} />
      <Route path="organizations/:orgId/notes/:noteId" component={RequireAuth(Note)} />
      <Route path="organizations/:orgId/users/:userId/notes" component={RequireAuth(NoteForm)} />
      <Route path="organizations/:orgId/users/:userId/notes/:noteId" component={RequireAuth(NoteFormEdit)} />
    </Route>
);

export default routes;
