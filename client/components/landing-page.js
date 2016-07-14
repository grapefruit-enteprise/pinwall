import React, { Component } from 'react';
import Login from './login.js';
import SignUp from './signup.js';
import { Tab, Grid, Row, Col, Nav, NavItem, Navbar } from 'react-bootstrap';

const LandingPage = (props) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="splash">
      <div>
        <Navbar fluid>
          <Navbar.Header>
              <h1>Pinwall</h1>
          </Navbar.Header>
          <Nav>
            <NavItem className="navtab-toggle" eventKey="login">
              Log In
            </NavItem>
            <NavItem className="navtab-toggle" eventKey="signup">
              Sign Up
            </NavItem>
            <NavItem eventKey="splash"></NavItem>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="login">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  <SignUp />
                </Tab.Pane>
                <Tab.Pane eventKey="splash">
                  <h1>Pinwall.</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Grid>
      </div>
    </Tab.Container>
  )
}
// <Login />
// <SignUp />
//add <SignUp /> element once it is written, then perform logic on that
export default LandingPage;
