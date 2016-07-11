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
      password: '',
      organization: ''
    }
  }

  onInputChange(event) {
    let key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
    console.log('state=', this.state);
  }

  submitUserInfo(event) {
    event.preventDefault();
    this.props.login(this.state.organization, this.state.user, this.state.password);
  }

  //organization field is temporary and will use same reducers as username

  render() {
    return(
      <div>
        <form className="form-inline" onSubmit={this.submitUserInfo.bind(this)}>
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="username" onChange={this.onInputChange.bind(this)}/>
          <label htmlFor="password">Password</label>
          <input id="password" placeholder="password" onChange={this.onInputChange.bind(this)}/>
          <label htmlFor="organization">Organization</label>
          <input id="organization" placeholder="Enter org. ID" onChange={this.onInputChange.bind(this)} />
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
