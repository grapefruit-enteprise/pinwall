import React, { Component } from 'react';
import { reduxForm, initialize, reset } from 'redux-form';
import { updateNote } from '../../actions/notes.js';
import  { Link } from 'react-router';


class NoteFormEdit extends Component {

componentWillMount(){
    this.props.initializeForm(this.props.note);


}

    onSubmit({ title, content, img, categories, tags }) {
      const orgId = this.props.params.orgId;
      const userId  = this.props.params.userId;
      const noteId  = this.props.params.noteId;

      this.props.updateNote({ title, content, img, categories, tags }, orgId, noteId)
    }

    render () {
        const { fields: { title, content, img, categories, tags }, handleSubmit } = this.props;
        return (

          // console.log("state to prop in MAP222",this.props.note)

        <div className="wrapper">
            <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                <div className="form-wrapper">
                    <div className="panel panel-default">
                        <div className="panel-body">
                          <div className="form-title">
                            <h1>Edit Note<div className="float-left">
                              <Link to={"/organizations/"+ this.props.params.orgId} ><a><i className="fa fa-times"
                              aria-hidden="true"></i></a></Link></div></h1></div>

                        <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}>


                            <div className="form-group">
                              <input value="VALUE IS HERE " type="text" className="form-control" placeholder="Title" { ...title }/>
                            </div>

                            <div className="form-group">
                              <input className="form-control" placeholder="Image url http://image.com" { ...img }/>
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

                              <textarea className="form-control" rows="10" {...content}/>

                            <button className="button" type="submit">Submit</button>
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
  console.log("state to prop in MAP",state.notes.note)
  console.log(state.notes.noteCats)
  state.notes.note['categories'] = [];
  state.notes.note['categories'] = state.notes.noteCats.map( noteCat => noteCat.id )
  return {note: state.notes.note, categories: state.categories.categories};
}


export default reduxForm({
    form: NoteFormEdit,
    fields: ['title', 'content', 'img', 'categories', 'tags'],
    validate
}, mapStateToProps , { updateNote })(NoteFormEdit)
