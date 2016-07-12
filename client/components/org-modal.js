import React, { Component } from 'react';
import { Modal, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

class OrgModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    console.dir(this.props);
    return(
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Select Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.hideModal}>
            <FormGroup>
              <FormControl componentClass="select"></FormControl>
            </FormGroup>
            <Button type="submit">Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default OrgModal;
