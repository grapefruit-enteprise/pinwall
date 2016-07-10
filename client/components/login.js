import React, { Component } from 'react';
//take out axios when redux is implemented
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { login } from '../actions/retrieve-notes-action.js'

const orgId = 1;

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
    this.props.login(orgId);
  }

  render() {
    return(
      <div>
        <form className="form-inline" onSubmit={this.submitUserInfo.bind(this)}>
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="username"/>
          <label htmlFor="password">Password</label>
          <input id="password" placeholder="password"/>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
