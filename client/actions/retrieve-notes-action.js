import axios from 'axios';
import { browserHistory } from 'react-router';
import { CATEGORIES, retrieveCategories } from './retrieve-categories-action.js';

export const NOTES = 'NOTES';

export function retrieveNotes(organizationId, categoryId) {
  let url = `api/organizations/${organizationId}`;
  url = categoryId ? url + `categories/${categoryId}` : url + '/notes';
  return function(dispatch) {
    axios.get(url)
    .then(function(response) {
      console.log('payload in retrieveNotes=', response);
      dispatch({ type: NOTES, payload: response.data });
    })
  }
}
