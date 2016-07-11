import axios from 'axios';
import { browserHistory } from 'react-router';

export const NOTES = 'NOTES';

export function login(user, pass, organizationId) {
  console.log('in login', organizationId);
  return function(dispatch) {
    let url = `api/organizations/${organizationId}/notes`;
    axios.get(url)
      .then(function(response) {
        dispatch({ type: NOTES, payload: response });
        console.log('payload in login=', response);
        browserHistory.push(`/${organizationId}`);
      });
  }
}

export function retrieveNotes(organizationId, categoryId) {
  let url = `api/organizations/${organizationId}`;
  return function(dispatch) {
    url = categoryId ? url + `categories/${categoryId}` : url + '/notes';
    axios.get(url)
      .then(function(response) {
        dispatch({ type: NOTES, payload: response });
        console.log('payload in retrieveNotes=', response);
        browserHistory.push(`/${organizationId}`);

      })
  }
}

export function signup(formObj) {
  console.log('signup', formObj);
}
