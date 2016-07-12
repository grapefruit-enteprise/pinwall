import { USER_INFO, ORGS } from '../actions/login-action.js';
//initial state sets orgs to empty array to handle modal behavior on login screen
export default function(state = {orgs: []}, action) {
  switch(action.type) {
    case USER_INFO: return action.payload
    case ORGS: return Object.assign({}, state, {
      orgs: action.payload
    })
  }
  return state;
}
