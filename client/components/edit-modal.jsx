import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import TinyMCE from 'react-tinymce';

class EditNoteForm extends Component {
	render () {
		const { fields: { title, content, img, categories, tags }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<button type="submit">Edit Note</button>
				<button type="submit">Delete Note</button>

				<div>
					<label>Title</label>
					<input type="text" placeholder="Title" { ...title }/>
				</div>
				<div>
					<label>Content</label>
					<textarea { ...content }/>
				</div>
				<div>
					<label>Images</label>
					<img src={ ...img }>
				</div>
				<div>
					<label>Category</label>
					<input type="text" placeholder="Category" { ...categories }/>
				</div>
				<div>
					<label>Tags</label>
					<input type="text" placeholder="Tags" { ...tags } />
				</div>
			</form>

	    <TinyMCE
	      content="<p>This is the ENDDDDDD content of the editor</p>"
	      config={{
	        plugins: 'link image code autolink autosave code codesample save',
	        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | codesample | save'
	      }}
	      onChange={this.handleEditorChange}
	    />
		)
	}
}

// addNoteForm.proptTypes = {
// 	fields: proptTypes.object.isRequired,
// 	handleSubmit: proptTypes.func.isRequired
// }

export default reduxForm({
	form: addNoteForm,
	fields
})(addNoteForm)
