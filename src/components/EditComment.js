import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchComment } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import EditCommentForm from './EditCommentForm'

class EditComment extends Component {

  componentDidMount() {
    this.props.fetchComment(this.props.match.params.commentId)
  }

  render() {

    const { general, updateComment } = this.props

    const parentId = this.props.match.params.id
    const category = this.props.match.params.category

    return(

      <section className="row edit-comment">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        <div className="col-xs-12">

          <Link to={`/${category}/${parentId}`}>Back</Link>

          <h2>Edit comment</h2>

          <EditCommentForm onSubmit={updateComment} />

        </div>

      </section>

    )
  }

}

function mapStateToProps ({comment}) {
  return {
    comment: comment,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchComment: (data) => dispatch(fetchComment(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComment))
