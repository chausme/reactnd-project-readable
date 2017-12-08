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

const parentId = this.props

let AddCommentForm = (props) => {
  const { handleSubmit, parentId, category } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Field name="body" component={renderTextarea} validate={required} label="Enter your text here..." />
      </div>
      <div className="field">
        <Field name="author" component={renderInput} type="text" validate={required} label="Author" />
      </div>
      <div className="field hidden">
        <Field name="parentId" component={renderInput} type="text"  className="hidden" />
      </div>
      <button type="submit" className="btn btn-primary btn-success">Create</button>
    </form>
  )
}

AddCommentForm = reduxForm({
  form: 'createComment',
  enableReinitialize: true
})(AddCommentForm)

AddCommentForm = connect(
  state => ({
    initialValues: {
      parentId: state.post.post.id,
      category: state.post.post.category
    }
  }),
)(AddCommentForm)

export default AddCommentForm
