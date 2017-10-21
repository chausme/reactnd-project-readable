import React, { Component } from 'react'
import { Redirect } from 'react-router'
import CreatePostForm from './CreatePostForm'

const capitalize = require('capitalize')

class CreatePost extends Component {

  render() {

    const { categories, createPost } = this.props

    return(

      <section className="row create-post">

        <div className="col-xs-12">

          <h2>Create new post</h2>

          <CreatePostForm onSubmit={createPost} />

        </div>

      </section>

    )
  }

}

export default CreatePost
