import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import reduxThunk     from 'redux-thunk';
import { AUTH_USER }  from './actions/types.js';
import routes         from './routes.js';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers     from './reducers';

import App          from './components/app';
import Welcome      from './components/welcome';
import RequireAuth  from './components/auth/require_auth';
import Signin       from './components/auth/signin';
import Signup       from './components/auth/signup';
import Wall         from './components/wall';
import Note         from './components/notes/show-note';
import NoteForm     from './components/notes/note-form';
import NoteFormEdit from './components/notes/note-form-edit';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token');
//const history = createBrowserHistory();

if(token) {
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.querySelector('.app'));
