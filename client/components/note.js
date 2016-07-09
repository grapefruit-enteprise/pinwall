import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div id="note_show">
        <div className="title">
          <h1>Title</h1>
        </div>
        <div className="content">
          <p>Text</p>
        </div>

      </div>
    )
  }
}

export default Note;
