import { CURRENT_NOTE } from '../actions/current-note-action.js';

export default function currentNoteReducer(state = {id: 2, title:'Tailor', content: 'warble warble'}, action) {
  switch(action.type) {
    case CURRENT_NOTE: return action.payload
  }
  return state;
}

// export default currentNoteReducer;
