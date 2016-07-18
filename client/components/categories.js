import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { fetchNotes } from '../actions/notes.js';


class Categories extends Component {
  renderCategories() {
    const orgId = this.props.allState.auth.authInfo.orgId;
    const categories = this.props.allState.categories.categories
    return categories.map(category => {
      return (
        <a
          key={category.id}
          onClick={() => this.props.fetchNotes(orgId, category.id)}> {category.title}
        </a>
      )
    });
  }

  render() {
    return (
      <div id="categories" className="animated fadeInDown">
        <h2>Categories</h2>
        <a
          key={99}
          onClick={() => this.props.fetchNotes(this.props.allState.auth.authInfo.orgId)}> All
        </a>
        {this.renderCategories()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { allState: state};

}


export default connect(mapStateToProps, { fetchCategories, fetchNotes })(Categories);
