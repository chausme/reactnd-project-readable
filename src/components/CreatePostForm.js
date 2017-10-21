import React from 'react'
import { Field, reduxForm } from 'redux-form'

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

const renderSelect = ({ input, label, meta: { touched, error, warning } }) => (
  <div>
    <select {...input}>
      <option value="" selected disabled>{label}</option>
      <option value="react">React</option>
      <option value="redux">Redux</option>
      <option value="udacity">Udacity</option>
    </select>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

let CreatePostForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Field name="title" component={renderInput} type="text" validate={required} label="Title" />
      </div>
      <div className="field">
        <Field name="body" component={renderTextarea} validate={required} label="Enter your text here..." />
      </div>
      <div className="field">
        <Field name="author" component={renderInput} type="text" validate={required} label="Author" />
      </div>
      <div className="field">
        <Field name="category" component={renderSelect} validate={required} label="Select category..." />
      </div>
      <button type="submit" className="btn btn-primary btn-success">Create</button>
    </form>
  )
}

CreatePostForm = reduxForm({
  // a unique name for the form
  form: 'createPost'
})(CreatePostForm)

export default CreatePostForm
