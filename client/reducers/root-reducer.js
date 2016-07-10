import { combineReducers } from 'redux';
import NotesReducer from './notes-reducer.js';
import UserReducer from './user-reducer.js';
const rootReducer = combineReducers({
  //reducers go here
  notes: NotesReducer
});

export default rootReducer;
