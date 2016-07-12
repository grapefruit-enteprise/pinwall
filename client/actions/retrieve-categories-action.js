import axios from 'axios';
import { browserHistory } from 'react-router';

export const CATEGORIES = 'CATEGORIES';

export function retrieveCategories(organizationId) {
  let url = `api/organizations/${organizationId}/categories`;
    console.log('is this running....?');
    return function(dispatch) {
      console.log('going to fetch data......');
      axios.get(url).then(function(response) {
        console.log('payload in retrieveCategories...', response);
        dispatch( {type:CATEGORIES, payload: response} );
      });
    }
}
// return function(dispatch) {
//   axios.get(url)
//   .then(function(response) {
//     dispatch({ type: CATEGORIES, payload: response });
    //browserHistory.push(`/${organizationId}`);


//console.log('url inside retrieveCategories:', url);

  //console.log('url=', url);

    //console.log('payload in retrieveCategories=', response);
