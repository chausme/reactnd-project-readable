import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreatePostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div className="field">
        <Field name="author" component="input" type="text" placeholder="Author" />
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
