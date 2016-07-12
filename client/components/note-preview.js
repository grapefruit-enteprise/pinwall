import React, { Component } from 'react';

const NotePreview = ({title, date, content}) => {
  return (
    <div className="col-lg-3 col-sm-4 col-xs-12 note">
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
    </div>
  )
}

export default NotePreview;
