import { USER_INFO, ORGS } from '../actions/login-action.js';

export default function(state = {}, action) {
  switch(action.type) {
    case USER_INFO: return action.payload
    //never mutate the state inside this function....that's
    //why we use action.payload instead
    case ORGS: return Object.assign({}, state, {
      orgs: action.payload
    })
  }
  return state;
}
