import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreatePostForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Field name="title" component="input" type="text" placeholder="Title" />
      </div>
      <div className="field">
        <Field name="body" component="textarea" type="text" placeholder="Enter your text here..." />
      </div>
      <div className="field">
        <Field name="author" component="input" type="text" placeholder="Author" />
      </div>
      <div className="field">
        <Field name="category" component="select">
          <option>Select category...</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="udacity">Udacity</option>
        </Field>
      </div>
      <button type="submit" className="btn btn-primary btn-success">Create</button>
    </form>
  )
}

CreatePostForm = reduxForm({
  // a unique name for the form
  form: 'createPost'
})(CreatePostForm)

export default CreatePostForm;
