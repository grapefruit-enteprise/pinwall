import { NOTES, CURRENT_NOTE, UPDATE_NOTE, NOTE_CAT } from '../actions/types'

const INITIAL_STATE = { all: [], note:null, categories:[], noteCat:[]};


export default function ( state = INITIAL_STATE, action) {
  switch(action.type) {
    case NOTES:
      return {...state, all: action.payload.data }
    case CURRENT_NOTE:
      return {...state, note: action.payload}
    case NOTE_CAT:
      return {...state, noteCats: action.payload}
    default:
      return state;
  }

}
