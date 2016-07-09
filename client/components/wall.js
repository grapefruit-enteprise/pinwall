import React, { Component } from 'react';
import NotePreview from './note-preview.js';
import { Link } from 'react-router';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy_data: [
        {title: "A note", date: "Now"},
        {title: "Another note", date: "Then"}
      ]
    }
  }

  render() {
    console.log("date:", this.state.dummy_data[0].date);
    console.log("title:", this.state.dummy_data[0].title);
    return(
      <div id="notes">
        <h2>Wall</h2>
        <Link to="/wall/all/1234"><NotePreview title={this.state.dummy_data[0].title} date={this.state.dummy_data[0].date}/></Link>
        <Link to="wall/all/5678"><NotePreview title={this.state.dummy_data[1].title} date={this.state.dummy_data[1].date}/></Link>
      </div>
    )
  }
}

export default Wall;
