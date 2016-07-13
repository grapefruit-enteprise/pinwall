//import axios from 'axios';

export const USER_INFO = 'USER_INFO';
export const ORGS = 'ORGS';
export const CURRENT_ORG = 'CURRENT_ORG';

export function selectCurrentOrg(orgId) {
  return {
      type: CURRENT_ORG,
      payload: orgId
    }
}

export function login(response) {
  let user_data = {
    firstname: response.data.firstname,
    lastname : response.data.lastname,
    username : response.data.username,
    id       : response.data.id,
    email    : response.data.email,
    auth     : response.headers.auth,
    orgs     : []
  };
  return {
    type: USER_INFO,
    payload: user_data
  };
}

export function logorgs(orgs) {
  return {
    type: ORGS,
    payload: orgs
  };
