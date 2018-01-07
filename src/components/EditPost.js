import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import * as actionsPosts from '../actions/posts'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditPostForm from './EditPostForm'
import NotFound from '../components/NotFound'

class EditPost extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {

    const { general, updatePost, post } = this.props

    return(

      <section className="row create-post">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        {!post.post.error && post.post.deleted === false ? (

          <div className="col-xs-12">

            <Link to={`/${post.post.category}/${post.post.id}`}>Back</Link>

            <h2>Edit post</h2>

            <EditPostForm onSubmit={updatePost} />

          </div>

        ) : (
          <NotFound />
        )}

      </section>

    )
  }

}
function mapStateToProps ({post}) {
  return {
    post: post,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionsPosts, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost))
