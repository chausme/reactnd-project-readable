import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import EditPostForm from './EditPostForm'

const capitalize = require('capitalize')

class EditPost extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {

    console.log(this.props)

    const { general, updatePost } = this.props

    return(

      <section className="row create-post">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        <div className="col-xs-12">

          <h2>Edit post</h2>

          <EditPostForm onSubmit={updatePost} />

        </div>

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
  return {
    fetchPost: (data) => dispatch(fetchPost(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost))
