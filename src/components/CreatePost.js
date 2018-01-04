import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import CreatePostForm from './CreatePostForm'

class CreatePost extends Component {

  render() {

    const { general, createPost } = this.props

    return(

      <section className="row create-post">

        {general.redirect && (
          <Redirect to={'/' + general.redirect}/>
        )}

        <div className="col-xs-12">

          <Link to={'/'}>Back</Link>

          <h2>Create new post</h2>

          <CreatePostForm onSubmit={createPost} />

        </div>

      </section>

    )
  }

}

export default CreatePost
