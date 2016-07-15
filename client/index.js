import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import reducers from './reducers/root-reducer.js';

const encryptor = createEncryptor({ secretKey: 'w98nPvdlNIpo'});
const createStoreApplyMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreApplyMiddleware(reducers, undefined, autoRehydrate());
const persistor = persistStore(store, { transforms: [encryptor] }, () => {console.log('rehydration complete')});

ReactDOM.render(<Provider store={store} persistor={persistor}>{routes}</Provider>, document.getElementById('app'));
