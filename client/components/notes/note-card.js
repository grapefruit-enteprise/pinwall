import React, { Component } from 'react';

const NoteCard = ({title, date, content}) => {
  return (
      <div className="col-md-4 col-sm-6 col-xs-12 col-lg-3 animated rollIn" >
      <div className="note ">
        <p className="title animated fadeInRightBig">{title}</p>
        <p className="date">{date}</p>
        </div>
      </div>
  )
}
export default NoteCard;
