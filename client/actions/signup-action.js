import axios from 'axios';
import { browserHistory } from 'react-router';
import { USER_INFO} from './login-action.js'


export function signup(formObj) {
	let url = 'api/users/signup';
	return function(dispatch){

    axios.post(url, formObj).then(function(response){

 		let newUserCreated = {
			auth: response.headers.auth,
			userId: response.headers.currentuser
		}
		
		let user_data = Object.assign({}, formObj, newUserCreated)
		console.log("userdata extend", user_data)

		dispatch({type: USER_INFO, payload: user_data});

    })
	}
  //should take formObj and create new user http request...and then?

 
}
