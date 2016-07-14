import React, { Component } from 'react';
import Login from './login.js';
import SignUp from './signup.js';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

const LandingPage = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1>Pinwall</h1>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">

            </li>
            <li className="dropdown">
              
            </li>
          </ul>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <Login />
              </div>
              <div className="col-xs-12 col-md-6">
                <SignUp />
              </div>
            </div>
          </div>
      </nav>
    </div>
  )
}


//add <SignUp /> element once it is written, then perform logic on that
export default LandingPage;
