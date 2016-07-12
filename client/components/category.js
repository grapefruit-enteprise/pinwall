import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveCategories } from '../actions/retrieve-categories-action.js';
import { retrieveNotes } from '../actions/retrieve-notes-action.js';


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderCategories() {

  	let orgId = this.props.orgId

    return this.props.categories.map(category => {

      return (
        <a
        
          key={category.id}
          onClick={() => this.props.retrieveNotes(orgId, category.id)}> {category.title}
    
        </a>
      )
    });
  }

  render() {
    return (
      <div id="category">
        <h2>Categories</h2>
        {this.renderCategories()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { categories: state.categories,  orgId: state.user.currentOrg};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { retrieveCategories, retrieveNotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
