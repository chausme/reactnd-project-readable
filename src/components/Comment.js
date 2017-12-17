import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comment extends Component {

  commentVoteClicker(id, vote) {
    this.props.voteComment({id, vote})
  }

  render() {

    const { comment, url, removeComment, voteComment } = this.props
    const id = comment.id

    let timestamp = new Date(comment.timestamp)

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    }

    let commentDate = timestamp.toLocaleTimeString("en-us", options)

    return(

      <div className="comment-wrap">

        {(comment) &&

          <div className="comment">

            <div className="comment-meta">
              <span>Comment posted by {comment.author} on {commentDate}</span>
              <span className="vote-score">
                <button onClick={() => this.commentVoteClicker(id, 'downVote')} className="btn btn-primary">&darr;</button>
                <label>{comment.voteScore}</label>
                <button onClick={() => this.commentVoteClicker(id, 'upVote')} className="btn btn-primary">&uarr;</button>
              </span>
              <span>
                <Link to={`/edit-comment${url}/${id}`}>Edit</Link> | <Link to='#' onClick={() => removeComment({id})}>Delete</Link>
              </span>
            </div>

            <div className="content comment-entry">
              {comment.body}
            </div>

          </div>
        }

      </div>

    )
  }

}

export default Comment
