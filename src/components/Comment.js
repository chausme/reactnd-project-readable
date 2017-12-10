import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comment extends Component {

  voteClicker(id, vote){
    //this.props.votePost({id, vote});
  }

  render() {

    const { comment, removeComment, voteComment, url } = this.props
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
                <button onClick={() => this.voteClicker(id, 'downVote')} className="btn btn-primary">&darr;</button>
                <label>{comment.voteScore}</label>
                <button onClick={() => this.voteClicker(id, 'upVote')} className="btn btn-primary">&uarr;</button>
              </span>
              <span>
                <Link to={`/edit-comment${url}/${comment.id}`}>Edit</Link> | <a href="" onClick={() => removeComment({id})}>Delete</a>
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
