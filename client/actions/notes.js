import axios              from 'axios';
import { browserHistory } from 'react-router';
import { NOTES, CURRENT_NOTE, CREATE_NOTE, DESTROY_NOTE, UPDATE_NOTE, NOTE_CAT} from './types'

// Base Root
//const ROOT_URL = 'http://localhost:3000';


export function fetchNotes(orgId, catId) {
  let baseurl = `/api/organizations/${orgId}`;
  let url = catId ? baseurl  + `/categories/${catId}` : baseurl  + '/notes';
  return function(dispatch) {
    axios.get(url)
     .then(function(response) {
       dispatch({ type: NOTES, payload: response });
     })
   }
}

export function showNote(note) {
 return {
     type: CURRENT_NOTE,
     payload: note
   }
}

export function showEditNote(note) {
 return {
     type: UPDATE_NOTE,
     payload: note
   }
}

export function getNoteCat(orgId, noteId) {
  console.log("orgId inside getNoteCat", orgId, "NoteId", noteId )
  let url = `/api/organizations/${orgId}/notes/${noteId}/categories`;
      return function(dispatch) {
        axios.get(url)
        .then(response => {
          console.log('url getNoteCat',url)
          console.log('response to getNoteCat',response)
           dispatch({ type: NOTE_CAT , payload: response.data});
        })
        .catch(() => {
            //Fix catch
            console.log("in catch err");

        });
      }
    // return {
    //     type: NOTE_CAT,
    //     payload: "Hello"
    //   }

}


export function createNote(formProps, userId, orgId){

  const url = `/api/organizations/${orgId}/users/${userId}/notes`
  return function(dispatch) {
    axios.post(url, formProps)
    .then(response => {
       dispatch({ type: CREATE_NOTE });
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        // Fix catch
        console.log("in catch err ");

    });
   }
}

export function updateNote(formProps, orgId, noteId){

  const url = `/api/organizations/${orgId}/notes/${noteId}`
  return function(dispatch) {
    axios.put(url, formProps)
    .then(response => {
       dispatch({ type: UPDATE_NOTE, payload:formProps});
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        // Fix catch
        console.log("in catch err ");
    });
   }
}

export function deleteNote(orgId, noteId){

  const url = `/api/organizations/${orgId}/notes/${noteId}`
  return function(dispatch) {
    axios.delete(url)
    .then(response => {
       dispatch({ type: DESTROY_NOTE });
       browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
        // Fix catch
        console.log("in catch err ");

    });
   }

}
