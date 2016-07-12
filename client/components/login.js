import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { login } from '../actions/login-action.js';
import OrgModal from './org-modal.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      this.props.login(this.state.email, this.state.password);
      resolve();
    })
    .then(() => {
      this.displayModal();
    });
  }

  displayModal() {
    this.setState({showModal: true});
  }

  hideModal() {
    this.setState({showModal: false});
  }

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
