import axios              from 'axios';
import { browserHistory } from 'react-router';
import { NOTES, CURRENT_NOTE, CREATE_NOTE, DESTROY_NOTE, UPDATE_NOTE} from './types'

// Base Root
const ROOT_URL = 'http://localhost:3000';


export function fetchNotes(organizationId, categoryId) {
 let url = `${ROOT_URL}/api/organizations/1/notes`;
 // url = categoryId ? url + `/categories/${categoryId}` : url + '/notes';
   return function(dispatch) {
     axios.get(url)
     .then(function(response) {
       console.log('payload in fetchNotes=', response);
       dispatch({ type: NOTES, payload: response });
     })
   }
}


export function showNote(note) {
  console.log("note ::", note)
 return {
     type: CURRENT_NOTE,
     payload: note
   }
}

export function showEditNote(note) {
  console.log("note in show EDIT::", note)
 return {
     type: UPDATE_NOTE,
     payload: note
   }
}

export function createNote(formProps, userId, orgId){
  console.log("Inside create", formProps);

  const url = `${ROOT_URL}/api/organizations/${orgId}/users/${userId}/notes`
  return function(dispatch) {
    axios.post(url, formProps)
    .then(response => {
       dispatch({ type: CREATE_NOTE });
       console.log("this is org ID ", orgId)
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        console.log("in catch err ");

    });
   }

}


export function updateNote(formProps, orgId, noteId){
  console.log("Inside update", formProps, orgId, noteId);

  const url = `${ROOT_URL}/api/organizations/${orgId}/notes/${noteId}`
  return function(dispatch) {
    axios.put(url, formProps)
    .then(response => {
       dispatch({ type: UPDATE_NOTE });
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        console.log("in catch err ");
    });
   }
}

export function deleteNote(orgId, noteId){
 console.log("WEEWWEE")
  const url = `${ROOT_URL}/api/organizations/${orgId}/notes/${noteId}`
  return function(dispatch) {
    axios.delete(url)
    .then(response => {
       dispatch({ type: DESTROY_NOTE });
       console.log("this is org ID ", orgId)
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        console.log("in catch err ");

    });
   }

}
