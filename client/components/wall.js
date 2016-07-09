import React, { Component } from 'react';
import NotePreview from './note-preview.js';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div id="notes">
        <NotePreview className="note"/>
      </div>
    )
  }
}

export default Wall;
