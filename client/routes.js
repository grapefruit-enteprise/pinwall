import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import reduxThunk     from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components and reducers from our app
import App          from './components/app';
import Wall         from './components/wall';
import Note         from './components/show-note';
import NoteForm     from './components/note-form';
import NoteFormEdit from './components/note-form-edit';
import reducers     from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Route path="organizations/:orgId" component={Wall} />
        <Route path="organizations/:orgId/notes/:noteId" component={Note} />
            <Route path="organizations/:orgId/users/:userId/notes" component={NoteForm} />
            <Route path="organizations/:orgId/users/:userId/notes/:noteId" component={NoteFormEdit} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
