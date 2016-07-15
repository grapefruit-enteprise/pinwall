import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login.js';
import SignUp from './signup.js';
import { Tab, Grid, Row, Col, Nav, NavItem, Navbar } from 'react-bootstrap';

class LandingPage extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log('Will receive props...', this.props.user);
    console.log('Will receive props...(nextProps)', nextProps.user);
    // if (nextProps.user.auth && nextProps.user.currentOrg) {
    //   this.context.router.push(`/${nextProps.user.currentOrg}`)
    // }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update...', this.props.user.auth);
    console.log('Component will update...(nextProps)', nextProps.user.auth);
  }

  componentDidUpdate() {
    console.log('Component updated...', this.props.user.auth);
    // if (nextProps.user.auth && nextProps.user.currentOrg) {
    //   this.context.router.push(`/${nextProps.user.currentOrg}`)
    // }
  }

  // setTimeout( () => {
  //   console.log('Will receive props...', this.props.user.auth);
  // }, 100);
  //

  render() {

    var things = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve();
      })
    }).then( () => {
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
                      <p>Landing page information to go here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </div>
        </Tab.Container>
      )
    });
    return things;
  }
}

LandingPage.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(LandingPage);
