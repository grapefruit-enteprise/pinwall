import { combineReducers } from 'redux';
import   NotesReducer      from './notes-reducer.js';
import   CategoriesReducer from './categories-reducer.js';
import { reducer as form } from 'redux-form';
import    authReducer      from './auth_reducer.js';



const rootReducer = combineReducers({
  form       : form,
  notes      : NotesReducer,
  categories : CategoriesReducer,
  auth       : authReducer
});

export default rootReducer;
