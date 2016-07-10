import axios from 'axios';
import ReduxPromise from 'redux-promise';

const orgId = 1;

export const NOTES = 'NOTES';

export function retrieveNotes(book) {
	let url = `api/organizations/${orgId}/notes`; 
  return {
    type: NOTES,
    payload: axios.get(url)
  };
}
