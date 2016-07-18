import React, { Component } from 'react';
import        { connect }   from 'react-redux';
import        { Link }      from 'react-router';
import      { deleteNote,
            showEditNote,
            getNoteCat  } from '../../actions/notes.js';


class Note extends Component {

  componentWillMount(){
    this.props.getNoteCat(this.props.params.noteId);

  }
  onDeleteClick(){
    this.props.deleteNote(this.props.params.orgId , this.props.params.noteId)

  }
  render() {
    if (!this.props.note) {
      return <div>Loading...</div>
    }
    const currentNote = this.props.note;
    const orgId       = this.props.params.orgId;
    const noteId      = this.props.params.noteId;

    return(

      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1" >
          <div className="spacer"></div>
            <div className="panel panel-default">
              <div className="panel-body">
                <div id="note_show">
                    <div className="title">
                      <h1>{currentNote.title}</h1>
                    </div>
                    <div className="noteImgCont">
                    <img className="img-responsive noteImg " src={currentNote.img} alt="" />
                    </div>
                    <div className="content">
                      <p>{currentNote.content}</p>
                    </div>
                    <div className="buttons">
                     <Link to={'/organizations/' + orgId}><i className="fa fa-chevron-left" aria-hidden="true">  Back</i></Link>

                      <div className="float-left">
                      <Link to={'/organizations/' + orgId + '/users/1/notes/' + noteId }><i onClick={() => this.props.showEditNote(currentNote)}  className="fa fa-pencil " aria-hidden="true"></i></Link>

                      <a><i onClick={this.onDeleteClick.bind(this)} className="fa fa-trash " aria-hidden="true"></i></a>
                      </div>
                    </div>

              </div>
            </div>
          </div>
      </div>
   </div>


    )
  }
}

function mapStateToProps(state) {
  return {note: state.notes.note};
}

export default connect(mapStateToProps,
{
  deleteNote:deleteNote,
  showEditNote:showEditNote,
  getNoteCat:getNoteCat
})(Note);
