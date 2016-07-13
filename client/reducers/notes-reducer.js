import { NOTES } from '../actions/retrieve-notes-action.js';

function notesReducer(state = [], action) {
  switch(action.type) {
    case NOTES: return action.payload;
  }
  return state;
}

export default notesReducer;
