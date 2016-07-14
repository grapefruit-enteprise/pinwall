import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers/root-reducer.js';

const storeWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = storeWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'));