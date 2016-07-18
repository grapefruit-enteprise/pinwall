import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR , ALL_ORGS} from './types';

//Do we need to change ROOT_URL?
// const ROOT_URL = 'http://localhost:3000';

export function fetchOrgs() {
  let url = `/api/organizations`;
  return function(dispatch) {
    axios.get(url)
     .then(function(response) {
       dispatch({ type: ALL_ORGS, payload: response.data });
     })
   }
}


 export function signinUser(formProps) {
    const orgId = formProps.organizationId;

   return function(dispatch) {
     axios.post(`/api/users/login`, formProps)
       .then(response => {
         const data = {};
         data.orgId = orgId;
         data.currentUser = response.data.currentUser;
         dispatch({ type: AUTH_USER, payload: data })
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('currentUser', response.data.currentUser);
         localStorage.setItem('orgId', orgId)
         browserHistory.push(`/organizations/${orgId}`);
       })
       .catch(() => {
         dispatch(authError('Bad login info'));
       });
   }
 }


export function signupUser(formProps) {
    const orgId = formProps.organizationId;
    return function(dispatch){
    axios.post(`/api/users/signup`, formProps)
    .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.currentUser);
        localStorage.setItem('orgId', orgId)
        browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
      dispatch(authError('Bad Signup info'));
    });
  }
}
 export function signoutUser() {

    return function(dispatch){
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('orgId');
        dispatch({type: UNAUTH_USER });
        browserHistory.push("/");


    }
 }

//
// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }
//
// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {headers: { Auth: localStorage.getItem('token')}})
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: FETCH_MESSAGE,
//         payload: response.data.message
//       });
//     });
//   }
// }
