import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createNote } from '../actions/notes.js';
import  { Link } from 'react-router';


class NoteForm extends Component {


    onSubmit({ title, content, img, categories, tags }) {
      const orgId = this.props.params.orgId;
      const userId  = this.props.params.userId;

      this.props.createNote({ title, content, img, categories, tags }, userId, orgId)
    }


    render () {
        const { fields: { title, content, img, categories, tags }, handleSubmit } = this.props;

        return (

        <div className="wrapper">
            <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                <div className="form-wrapper">

                    <div className="panel panel-default">
                        <div className="panel-body">
                          <div className="form-title">
                            <h1>Create Note<div className="float-left">
                              <Link to={"/organizations/" + this.props.params.orgId} ><a><i className="fa fa-times"
                              aria-hidden="true"></i></a></Link></div></h1></div>


                        <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}>


                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Title" { ...title }/>
                            </div>

                            <div className="form-group">
                              <input { ...img } className="form-control" placeholder="Image url http://image.com"/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Category" { ...categories }/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Tags" { ...tags } />
                            </div>

                              <textarea classaName="form-control" rows="10" {...content}/>

                            <button type="submit">Submit</button>
                          </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


function validate(values){
  console.log("In val fn")
}


export default reduxForm({
    form: NoteForm,
    fields: ['title', 'content', 'img', 'categories', 'tags'],
    validate
}, null , { createNote })(NoteForm)
