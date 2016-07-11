import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotePreview from './note-preview.js';
import { selectCurrentNote } from '../actions/current-note-action.js'
import Dummy from '../dummy_data.js';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // notes: Dummy
    }
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
    })
  }

  render() {
    return(
      <div id="notes">
        <h2>Wall</h2>
        {this.renderNotes()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { notes: state.notes.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectCurrentNote: selectCurrentNote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
