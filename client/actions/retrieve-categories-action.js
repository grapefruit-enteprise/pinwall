import axios from 'axios';
import { browserHistory } from 'react-router';

export const CATEGORIES = 'CATEGORIES';

export function retrieveCategories(organizationId, categoryId) {
  //let url = `api/organizations/${organizationId}`;
  return function(dispatch) {
    //url = categoryId ? url + `categories/${categoryId}` : url + '/notes';
    axios.get(url)
      .then(function(response) {
        dispatch({ type: CATEGORIES, payload: response });
        console.log('payload in retrieveCategories=', response);
        // browserHistory.push(`/${organizationId}`);

      })
  }
}
