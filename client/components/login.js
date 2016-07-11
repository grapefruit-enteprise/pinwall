import React, { Component } from 'react';
//take out axios when redux is implemented
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { login } from '../actions/retrieve-notes-action.js';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

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
    console.log('Inside submitUserInfo', 'user:', this.state.username, 'pass', this.state.password, 'org', this.state.organization)
    this.props.login(this.state.username, this.state.password, this.state.organization);
  }

  //organization field is temporary and will use same reducers as username

  render() {
    return(
      <div>
        <Form onSubmit={this.submitUserInfo.bind(this)}>
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter User"
              onChange={this.onInputChange.bind(this)}
              value={this.state.username} />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter Password"
              onChange={this.onInputChange.bind(this)}
              value={this.state.password} />
          </FormGroup>
          <FormGroup controlId="organization">
            <ControlLabel>Organization</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter org. ID"
              onChange={this.onInputChange.bind(this)}
              value={this.state.organization} />
          </FormGroup>
          <Button bsStyle="success" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
