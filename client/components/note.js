import React, { Component } from 'react';
import { connect} from 'react-redux';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    if (!this.props.currentNote) {
      return <div>Loading...</div>
    }
    let current = this.props.currentNote;
    return(
      <div id="note_show">
        <div className="title">
          <h1>{this.props.currentNote.title}</h1>
        </div>
        <div className="content">
          <p>{this.props.currentNote.content}</p>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentNote: state.currentNote};
}

export default connect(mapStateToProps)(Note);
