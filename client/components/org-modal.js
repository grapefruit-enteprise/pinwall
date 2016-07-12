import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Modal, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { retrieveNotes } from '../actions/retrieve-notes-action.js';
import { retrieveCategories } from '../actions/retrieve-categories-action.js';

class OrgModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onSelect(event) {
    console.log('changing selection:', event.target.value);
    this.setState({
      orgId: event.target.value
    });
  }
// Async action still performing out of order
  getMessagesByOrg(event) {
    let orgId = this.state.orgId;
    event.preventDefault();
    return new Promise((resolve, reject) => {
      this.props.retrieveNotes(orgId);
      console.log('Inside first part of promise...');
      resolve(orgId);
    })
    .then((orgId) => {
      console.log('Inside second part of promise....');
      this.props.retrieveCategories(orgId);
      this.props.hideModal();
      browserHistory.push(`/${orgId}`);
    });
  }

  renderOptions() {
    return this.props.orgs.map(org => {
      return (
        <option key={org.id} value={org.id}>{org.name}</option>
      )
    });
  }

  render() {
    return(
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Select Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.getMessagesByOrg.bind(this)} >
            <FormGroup>
              <FormControl
                value={this.state.orgId}
                componentClass="select"
                onChange={this.onSelect.bind(this)}>
                <option value="">Select an organization</option>
                {this.renderOptions()}
              </FormControl>
            </FormGroup>
            <Button type="submit">Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

function mapPropsToState(state) {
  return {orgs: state.user.orgs}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({retrieveNotes: retrieveNotes, retrieveCategories: retrieveCategories}, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(OrgModal);
