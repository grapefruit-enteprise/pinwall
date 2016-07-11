import { combineReducers } from 'redux';
import NotesReducer from './notes-reducer.js';
import UserReducer from './user-reducer.js';
import currentNoteReducer from './current-note-reducer.js';

const rootReducer = combineReducers({
  user: UserReducer,
  notes: NotesReducer,
  currentNote: currentNoteReducer
});

export default rootReducer;
