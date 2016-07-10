import { combineReducers } from 'redux';
import NotesReducer from './notes-reducer.js';
import UserReducer from './user-reducer.js';

const rootReducer = combineReducers({
  user: UserReducer,
  notes: NotesReducer
});

export default rootReducer;
