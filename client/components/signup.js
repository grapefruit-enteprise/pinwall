import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { signup } from '../actions/signup-action.js';
import { retrieveNotes } from '../actions/retrieve-notes-action';
import { retrieveCategories } from '../actions/retrieve-categories-action';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username       : '',
      firstname      : '',
      lastname       : '',
      new_password   : '',
      confirmPassword: '',
      organization   : '',
      new_email      : ''
    }
  }

  onInputChange(event) {
    let key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
  }

  submitNewUser(event) {
    event.preventDefault();
    let newUser = {
      username      : this.state.username,
      firstname     : this.state.firstname,
      lastname      : this.state.lastname,
      password      : this.state.new_password,
      organizationId: 2,
      email         : this.state.new_email
    };
    let orgId = newUser.organizationId;

    return new Promise((resolve, reject) => {
      this.props.signup(newUser)
      resolve(orgId);
    })
    .then((orgId) => {
      return this.props.retrieveNotes(orgId)
    }).then(() => {
      this.props.retrieveCategories(orgId)
      browserHistory.push(`/${orgId}`)
    });

    //this.props.login(this.state.organization, this.state.user, this.state.password);
  }

  getValidationState() {
    let password = this.state.new_password;
    let confirmPassword = this.state.confirmPassword;
    if (password.length && confirmPassword.length) {
      return password == confirmPassword && password.length > 6 ? 'success' : 'error';
    }
  }

  render() {
    return(
      <Form onSubmit={this.submitNewUser.bind(this)}>

        <FormGroup controlId="username">
        <ControlLabel>User Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="User"
          onChange={this.onInputChange.bind(this)}
          value={this.state.username}/>
        </FormGroup>

        <FormGroup controlId="firstname">
        <ControlLabel>First Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter name"
          onChange={this.onInputChange.bind(this)}
          value={this.state.firstname}/>
        </FormGroup>

        <FormGroup controlId="lastname">
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter name"
          onChange={this.onInputChange.bind(this)}
          value={this.state.lastname}/>
        </FormGroup>

        <FormGroup controlId="new_email">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter email"
          onChange={this.onInputChange.bind(this)}
          value={this.state.new_email}/>
        </FormGroup>

        <FormGroup controlId="new_password">
        <ControlLabel>Password</ControlLabel>
        <FormControl
          type="password"
          placeholder="Enter Password (7 characters or more)"
          onChange={this.onInputChange.bind(this)}
          value={this.state.new_password}/>
        </FormGroup>

        <FormGroup
          controlId="confirmPassword"
          validationState={this.getValidationState()}>
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
          type="password"
          placeholder="Re-enter Password"
          onChange={this.onInputChange.bind(this)}
          value={this.state.confirmPassword}/>
        </FormGroup>

        <FormGroup controlId="organizationId">
        <ControlLabel>Organization</ControlLabel>
        <FormControl
          type="text"
          placeholder="Organization ID"
          onChange={this.onInputChange.bind(this)}
          value={this.state.organizationId}/>
        </FormGroup>

        <Button className="btn btn-success" type="submit">Submit</Button>
      </Form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup, retrieveNotes,retrieveCategories }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);

//For now, organizationId is the field, but maybe we can enter a text field to map to an org later

//    "username"       : "barry123",
//    "firstname"      : "barry",
//    "lastname"       : "Smith",
//    "email"          : "barrysmith123@example.com",
//    "password"       : "password",
//    "organizationId" : 1
