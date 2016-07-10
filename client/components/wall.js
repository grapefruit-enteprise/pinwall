import React, { Component } from 'react';
import NotePreview from './note-preview.js';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Dummy from '../dummy_data.js';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Dummy
    }
  }

  renderNotes() {
    return this.state.notes.map(note => {
      let path = `/wall/${note.id}`
      return (
        <Link to={path} key={note.id}><NotePreview title={note.title} date={note.createdAt} content={note.content}/></Link>
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
  return (
    notes: state.notes
  )
}

export default Wall;
