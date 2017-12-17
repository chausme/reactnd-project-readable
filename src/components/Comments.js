import React, { Component } from 'react'
import Comment from '../components/Comment'
import { Link } from 'react-router-dom'

class Comments extends Component {

  render() {

    const { url, comments, removeComment, voteComment } = this.props

    return(

        <div className="comments">

          <h3>Comments</h3>

          {(comments) && comments.map((comment) => (

            <Comment comment={comment} removeComment={removeComment} voteComment={voteComment} key={comment.id} url={url} />

          ))}

          <div className="text-center">
            <Link to={`/add-comment${url}`} className="btn btn-primary btn-success">Add comment</Link>
          </div>

        </div>

    )
  }

}

export default Comments
