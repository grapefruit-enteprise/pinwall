import React, { Component }   from 'react';
import        { connect }     from 'react-redux';
import        { Link }        from 'react-router';
import { bindActionCreators } from 'redux';

// Actions
import { fetchNotes, showNote } from '../actions/notes';
// Components
import NoteCard from './note-card.js';


export default class Wall extends Component {

  componentWillMount() {
    this.props.fetchNotes();
  }

  renderNotes() {
    console.log("render Notes", this.props.notes)
    return this.props.notes.map(note => {
      let path = `/organizations/${note.organizationId}/notes/${note.id}`;
      return (
        <Link
          to={path}
          key={note.id}
          onClick={() => this.props.showNote(note)}>
          <NoteCard
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

        <div className="row" id="notes" >
          {this.renderNotes()}
        </div>

    )
  }
}

function mapStateToProps(state) {
  return { notes: state.notes.all };
}


export default connect(mapStateToProps,
  {fetchNotes:fetchNotes , showNote:showNote })(Wall);
