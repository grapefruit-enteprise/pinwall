import { combineReducers } from 'redux';
import NotesReducer from './notes-reducer.js';
import UserReducer from './user-reducer.js';
import CurrentNoteReducer from './current-note-reducer.js';
import CategoriesReducer from './categories-reducer.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  notes: NotesReducer,
  currentNote: CurrentNoteReducer,
  categories: CategoriesReducer,
  form: formReducer
});

export default rootReducer;
