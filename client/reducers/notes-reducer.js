import { NOTES, CURRENT_NOTE, UPDATE_NOTE } from '../actions/types'

const INITIAL_STATE = { all: [], note:null };


export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case NOTES:
    console.log("line 8 ", action.payload)
      return {...state, all: action.payload.data }
    case CURRENT_NOTE:
      console.log("line 12 ", action.payload)
      return {...state, note: action.payload}
    case UPDATE_NOTE:
      console.log("line 15 ", action.payload)
      return {...state, note: action.payload}
    default:
    return state;
  }

}
