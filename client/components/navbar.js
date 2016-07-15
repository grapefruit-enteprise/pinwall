import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/logout-action.js';

class NavBar extends Component {
  constructor(props, context) {
    super(props);
    this.state = { term: '' }

  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  onLogOut(event) {
    event.preventDefault();
    this.props.logout();
    //this.context.persistor.purgeAll();
    this.context.router.push('/');
  }

  //Add onSubmit={} to the form element once the callback is written

  render() {
    console.log('context=',this.context)
    return(
    <div>
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="./client/assets/images/logo.svg" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={this.state.term} onChange={this.onInputChange.bind(this)}/>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#" onClick={this.onLogOut.bind(this)}>Log Out</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" aria-hidden="true" />Marco <span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider" />
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>
      </nav>
        {this.props.children}
    </div>
    /* /.container-fluid */
    )
  }
}

NavBar.contextTypes = {
  persistor: PropTypes.object,
  router: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}


export default connect(null, mapDispatchToProps)(NavBar);
