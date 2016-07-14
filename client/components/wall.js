import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotePreview from './note-preview.js';
import { selectCurrentNote } from '../actions/current-note-action.js';
import Category from './category.js';
import { retrieveNotes } from '../actions/retrieve-notes-action.js';
import { selectCurrentOrg } from '../actions/login-action.js';
import { retrieveCategories } from '../actions/retrieve-categories-action.js';

//import Dummy from '../dummy_data.js';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // notes: Dummy
    }
  }

  componentWillMount() {
    let orgId = this.props.params.org;
    this.props.retrieveNotes(orgId);
    this.props.retrieveCategories(orgId);
  }

  componentDidMount() {
    //call setInterval here, or perhaps
  }

  renderNotes() {
    return this.props.notes.map(note => {
      let path = `/${note.organizationId}/read/${note.id}`;
      return (
        <Link
          to={path}
          key={note.id}
          onClick={() => this.props.selectCurrentNote(note)}>
          <NotePreview
            note={note}
            title={note.title}
            date={note.createdAt}
            content={note.content} />
        </Link>
      )
    });
  }

  render() {
    return (
      <div className="container" id="notes">
        <Category/>
        <row >
          {this.renderNotes()}
        </row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { notes: state.notes, currentOrg: state.user.currentOrg };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectCurrentNote, retrieveNotes, selectCurrentOrg, retrieveCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
