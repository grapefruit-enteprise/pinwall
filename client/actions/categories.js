import axios              from 'axios';
import { browserHistory } from 'react-router';
import { CATEGORIES }     from './types'

//const ROOT_URL = 'http://localhost:3000';


export function fetchCategories(orgId) {
    //Fix orgId here
    let url = `/api/organizations/${orgId}/categories`;
    return function(dispatch) {
      axios.get(url).then(function(response) {
        dispatch( {type:CATEGORIES, payload: response.data} );
      });
    }
}
