import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Modal, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { selectCurrentOrg } from '../actions/login-action.js';

class OrgModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect(event) {
    this.setState({
      orgId: event.target.value
    });
  }

  getMessagesByOrg(event) {
    event.preventDefault();
    let orgId = this.state.orgId;
    if (orgId) {
      this.props.selectCurrentOrg(orgId);
      browserHistory.push(`/${orgId}`);
    } else {
      alert('Please select an organization to continue.');
    }
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
            <Button type="submit">Select</Button>
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
  return bindActionCreators( { selectCurrentOrg }, dispatch )
}

export default connect(mapPropsToState, mapDispatchToProps)(OrgModal);
