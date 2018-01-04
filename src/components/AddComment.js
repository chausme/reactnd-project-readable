import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import AddCommentForm from './AddCommentForm'

class AddComment extends Component {

  render() {

    const { general, createComment } = this.props

    const parentId = this.props.match.params.id
    const category = this.props.match.params.category

    return(

      <section className="row add-comment">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        <div className="col-xs-12">

          <Link to={`/${category}/${parentId}`}>Back</Link>

          <h2>Add comment</h2>

          <AddCommentForm onSubmit={createComment} />

        </div>

      </section>

    )
  }

}

export default AddComment
