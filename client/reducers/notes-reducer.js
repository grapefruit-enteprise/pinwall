import { NOTES } from '../actions/retrieve-notes-action.js';

function notesReducer(state = null, action) {
  switch(action.type) {
    case NOTES: return action.payload;
  }
  return state;
}

export default notesReducer;
