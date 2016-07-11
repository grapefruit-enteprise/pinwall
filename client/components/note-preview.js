import React, { Component } from 'react';
//pass in {props.title} to the h3 once data is served
const NotePreview = ({title, date, content}) => {
  return (
    <div className="col-lg-3 col-sm-4 col-xs-12 note">
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p>{content}</p>
    </div>
  )
}

export default NotePreview;
