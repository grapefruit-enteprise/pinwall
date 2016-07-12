import React, { Component } from 'react';
//take out axios when redux is implemented
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { login } from '../actions/login-action.js';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import OrgModal from './org-modal.js';

const orgId = 1;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      organization: '',
      showModal: false
    }
  }

  onInputChange(event) {
    let key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
  }

  submitUserInfo(event) {
    event.preventDefault();
    return new Promise((resolve, reject) => {
      this.props.login(this.state.email, this.state.password, this.state.organization);
      resolve();
    })
    .then(() => {
      console.log("after submitUserInfo");
      this.displayModal();
    });
  }

  displayModal() {
    this.setState({showModal: true});
    console.log(this.state.showModal);
  }

  hideModal() {
    this.setState({showModal: false});
  }

  //organization field is temporary and will use same reducers as username

  render() {
    return(
      <div>
        <Form onSubmit={this.submitUserInfo.bind(this)}>
          <FormGroup controlId="email">
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter email"
              onChange={this.onInputChange.bind(this)}
              value={this.state.username} />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
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
        <OrgModal
          show={this.state.showModal}
          hideModal={this.hideModal.bind(this)}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
