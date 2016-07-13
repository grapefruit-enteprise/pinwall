import axios from 'axios';

export const USER_INFO = 'USER_INFO';
export const ORGS = 'ORGS';
export const CURRENT_ORG = 'CURRENT_ORG';

export function selectCurrentOrg(orgId) {
  console.log("inside selectCurrentOrg", orgId)
  return {
      type: CURRENT_ORG,
      payload: orgId
    }
}

export function login(email, password) {
  return function(dispatch) {
    let url = 'api/users/login';
    axios.post(url, {
      "email"   : email,
      "password": password
    })
    .then(function(response) {
      console.log('response from login:', response);
      let user_data = {
        firstname: response.data.firstname,
        lastname : response.data.lastname,
        username : response.data.username,
        id       : response.data.id,
        email    : response.data.email,
        auth     : response.headers.auth,
        orgs     : []
      };
      dispatch({type: USER_INFO, payload: user_data});
      let userId = response.data.id;
      return axios.get(`api/user/${userId}/organizations`);
    })
    .catch(function(err) {
      alert("The user email and password did not match.");
    })
    .then(function(response) {
      if(response) dispatch({type: ORGS, payload: response.data})
      console.log('response from GET organizations by user:', response);
    });
  }
}
