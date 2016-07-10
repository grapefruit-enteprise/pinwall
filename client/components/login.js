import React, { Component } from 'react';
//take out axios when redux is implemented
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // onInputChange

  submitUserInfo(event) {
    event.preventDefault();
    //switch out for action later
    axios.post()

  }

  render() {
    return(
      <div>
        <form className="form-inline" onSubmit={this.submitUserInfo.bind(this)}>
          <label for="username">Username</label>
          <input id="username" placeholder="username"/>
          <label for="password">Password</label>
          <input id="password" placeholder="password"/>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
