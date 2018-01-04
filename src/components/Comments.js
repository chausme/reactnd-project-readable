import React, { Component } from 'react'
import Comment from '../components/Comment'
import { Link } from 'react-router-dom'
import Sort from '../components/Sort'

class Comments extends Component {

  render() {

    const { url, comments, removeComment, voteComment, sortComments } = this.props

    return(

        <div className="comments">

          <div className="row">

            <div className="col-sm-6">
              <h3>Comments</h3>
            </div>

            <div className="col-sm-6">
              <div className="row">
                <Sort sortItems={sortComments} />
              </div>
            </div>

          </div>

          {(comments) && comments.comments.map((comment) => (

            <Comment comment={comment} removeComment={removeComment} voteComment={voteComment} key={comment.id} url={url} />

          ))}

          <div className="bottom text-center">
            <Link to={`/add-comment${url}`} className="btn btn-primary btn-success">Add comment</Link>
          </div>

        </div>

    )
  }

}

export default Comments
