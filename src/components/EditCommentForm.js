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

let EditCommentForm = (props) => {
  const { handleSubmit, parentId, category } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Field name="body" component={renderTextarea} validate={required} label="Enter your text here..." />
      </div>
      <button type="submit" className="btn btn-primary btn-success">Create</button>
    </form>
  )
}

EditCommentForm = reduxForm({
  form: 'createComment',
  enableReinitialize: true
})(EditCommentForm)

EditCommentForm = connect(
  state => ({
    initialValues: {
      ...state.comment.comment,
      parentId: state.post.post.id,
      category: state.post.post.category
    }
  }),
)(EditCommentForm)

export default EditCommentForm
