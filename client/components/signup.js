import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: ''
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
    //this.props.login(this.state.organization, this.state.user, this.state.password);
  }

  getValidationState() {
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if (password.length && confirmPassword.length) {
      return password == confirmPassword ? 'success' : 'error';
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
          value={this.state.username}/>
        </FormGroup>
        <FormGroup controlId="lastname">
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter name"
          onChange={this.onInputChange.bind(this)}
          value={this.state.username}/>
        </FormGroup>
        <FormGroup controlId="email">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter email"
          onChange={this.onInputChange.bind(this)}
          value={this.state.username}/>
        </FormGroup>
        <FormGroup controlId="password">
        <ControlLabel>Password</ControlLabel>
        <FormControl
          type="password"
          placeholder="Enter Password"
          onChange={this.onInputChange.bind(this)}
          value={this.state.password}/>
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
        <Button className="btn btn-success">Submit</Button>
      </Form>
    )
  }
}

export default SignUp;

//For now, organizationId is the field, but maybe we can enter a text field to map to an org later

//    "username"       : "barry123",
//    "firstname"      : "barry",
//    "lastname"       : "Smith",
//    "email"          : "barrysmith123@example.com",
//    "password"       : "password",
//    "organizationId" : 1
