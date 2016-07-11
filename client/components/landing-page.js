import React, { Component } from 'react';
import Login from './login.js';
import SignUp from './signup.js';
import { Grid, Row, Col } from 'react-bootstrap';

const LandingPage = (props) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6}>
        <Login />
        </Col>
        <Col xs={12} md={6}>
          <SignUp />
        </Col>
      </Row>
    </Grid>
  )
}


//add <SignUp /> element once it is written, then perform logic on that
export default LandingPage;
