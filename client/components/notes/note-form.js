import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createNote } from '../../actions/notes.js';
import  { Link } from 'react-router';


class NoteForm extends Component {


    onSubmit({ title, content, img, categories, tags }) {
      const orgId = this.props.params.orgId;
      const userId  = this.props.params.userId;

      this.props.createNote({ title, content, img, categories, tags }, userId, orgId)
    }
    renderCategories(){
      if(!this.props.categories){
        return (
          <div className="alert alert-notice">
            Your orgaization has no categories
          </div>
        )
      }
      return (
        <div className="alert alert-notice">
          Your orgaization has no categories
        </div>
      )




    }


    render () {
        const { fields: { title, content, img, categories, tags }, handleSubmit } = this.props;

        return (

        <div className="wrapper">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
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

                            <div>
                            <label>Please select from the list of Categories</label>
                            <div className="form-select">
                            <select multiple className="form-control" { ...categories }>
                            { this.props.categories.map( category => <option key={category.id} value={category.id}>{category.title}</option>) }
                            </select>
                            </div>
                            </div>

                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Tags" { ...tags } />
                            </div>

                              <textarea classaName="form-control" rows="10" {...content}/>

                            <button classaName="button" type="submit">Submit</button>
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

function mapStateToProps(state) {
  console.log("FORM this cat", state.categories)
  return { categories: state.categories.categories};
}

export default reduxForm({
    form: NoteForm,
    fields: ['title', 'content', 'img', 'categories', 'tags'],
    validate
}, mapStateToProps , { createNote })(NoteForm)
