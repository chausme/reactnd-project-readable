import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import * as actionsComments from '../actions/comments'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import EditCommentForm from './EditCommentForm'
import NotFound from '../components/NotFound'

class EditComment extends Component {

  componentDidMount() {
    this.props.fetchComment(this.props.match.params.commentId)
  }

  render() {

    const { general, updateComment, comment } = this.props

    const parentId = this.props.match.params.id
    const category = this.props.match.params.category

    return(

      <section className="row edit-comment">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        {('comment' in comment && comment.comment.deleted === false && parentId === comment.comment.parentId) ? (

        <div className="col-xs-12">

          <Link to={`/${category}/${parentId}`}>Back</Link>

          <h2>Edit comment</h2>

          <EditCommentForm onSubmit={updateComment} />

        </div>

        ) : (
          <NotFound />
        )}

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
  return bindActionCreators(actionsComments, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComment))
