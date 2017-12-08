import React, { Component } from 'react'
import { removeComment, voteComment } from '../actions'
import Comment from '../components/Comment'

class Comments extends Component {

  render() {

    const { url, comments } = this.props

    console.log(comments);

    return(

        <div className="comments">

          <h3>Comments</h3>

          {(comments) && comments.map((comment) => (

            <Comment comment={comment} removeComment={removeComment} voteComment={voteComment} key={comment.id} url={url} />

          ))}

        </div>

    )
  }

}

export default Comments
