import React, { Component } from 'react';
//pass in {props.title} to the h3 once data is served
const NotePreview = (props) => {
  return (
    <div className="col-lg-3 col-sm-4 col-xs-12">
      <h3 className="title">Some Title</h3>
    </div>
  )
}

export default NotePreview;
