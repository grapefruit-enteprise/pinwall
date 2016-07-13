import { USER_INFO, ORGS, CURRENT_ORG } from '../actions/login-action.js';
//initial state sets orgs to empty array to handle modal behavior on login screen
export default function(state = {orgs: []}, action) {
  console.log('in user-reducer', action);
  switch(action.type) {
    case 'USER_INFO':
      console.log('case USER_INFO in user reducer, payload =', action.payload);
    
      return action.payload;
    case 'CURRENT_ORG': return Object.assign({}, state, {
    currentOrg: action.payload
  });
    case 'ORGS':
      console.log('case ORGS in user reducer, payload =', action.payload);
      return Object.assign({}, state, {
        orgs: action.payload
      });
  }
  return state;
}
