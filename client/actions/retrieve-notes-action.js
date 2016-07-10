import axios from 'axios';
import { browserHistory } from 'react-router';

export const NOTES = 'NOTES';

// export function retrieveNotes(organizationId) {
// 	let url = `api/organizations/${organizationId}/notes`;
//   const request = axios.get(url);
//   return {
//     type: NOTES,
//     payload: request
//   };
// }

export function login(organizationId) {
  return function(dispatch) {
    let url = `api/organizations/${organizationId}/notes`;
    console.log('inside login:', url);
    axios.get(url)
      .then(function(response) {
        dispatch({ type: NOTES, payload: response });
        //this might need to be its own then callback
        console.log('payload=', response);
        browserHistory.push('/wall');
        // change this route ^^^^^^ to /:org
      });
  }
}

// axios.get(url + `/categories/${categoryId}`)
export function retrieveNotes(organizationId, categoryId) {
  let url = `api/organizations/${organizationId}`;
  return function(dispatch) {
    url = categoryId ? url + `categories/${categoryId}` : url + '/notes';
    console.log('url in retrieveNotes:', url);
    axios.get(url)
      .then(function(response) {
        dispatch({ type: NOTES, payload: response });
        browserHistory.push('/wall');
        // change this route ^^^^^^ to /:org

      })
  }
}
