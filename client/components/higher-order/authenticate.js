import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      //change this to an actual server authentication test when available
      if (!this.props.user.auth) {
        this.context.router.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      //change this to an actual server authentication test when available
      if (!this.props.user.auth) {
        this.context.router.push("/");
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state){
    return { user: state.user }
  }

  return connect(mapStateToProps)(Authenticate);
}
