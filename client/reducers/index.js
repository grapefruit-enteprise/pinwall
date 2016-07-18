import { combineReducers } from 'redux';
import NotesReducer        from './notes-reducer.js';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
  form: form,
  notes: NotesReducer
});

export default rootReducer;
