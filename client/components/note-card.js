import React, { Component } from 'react';

const NoteCard = ({title, date, content}) => {
  return (
      <div className="col-md-4" >
      <div className="note">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        </div>
      </div>
  )
}

export default NoteCard;
