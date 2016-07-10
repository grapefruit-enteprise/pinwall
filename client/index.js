import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import ReduxThunk from 'redux-thunk';

// import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
// import Login from './components/login.js';
// import NavBar from './components/navbar.js';
// import Wall from './components/wall.js';
// import Note from './components/note.js';

import reducers from './reducers/root-reducer.js';

const storeWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = storeWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'));


  // <Router history={browserHistory} >
  //   <Route path="/" component={NavBar}>
  //     <IndexRoute component={Wall} />
  //     <Route path="/wall" component={Wall} />
  //       <Route path="/wall/:category" component={Wall} />
  //       <Route path="/wall/:category/:noteId" component={Note} />
  //   </Route>
  // </ Router>
