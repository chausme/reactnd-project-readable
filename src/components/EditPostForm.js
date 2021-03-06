import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const required = value => value ? undefined : 'Required'

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const renderTextarea = ({ input, label, meta: { touched, error, warning } }) => (
  <div>
    <textarea {...input} placeholder={label}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

let EditPostForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Field name="title" component={renderInput} type="text" validate={required} label="Title" />
      </div>
      <div className="field">
        <Field name="body" component={renderTextarea} validate={required} label="Enter your text here..." />
      </div>
      <button type="submit" className="btn btn-primary btn-success">Save</button>
    </form>
  )
}

EditPostForm = reduxForm({
  // a unique name for the form
  form: 'updatePost',
  enableReinitialize: true
})(EditPostForm)

EditPostForm = connect(
  state => ({
    initialValues: {
      ...state.post.post,
      body: state.post.post.body,
      title: state.post.post.title
    }
  }),
)(EditPostForm)

export default EditPostForm
