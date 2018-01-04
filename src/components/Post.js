import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const capitalize = require('capitalize')

class Post extends Component {

  voteClicker(id, vote){
    this.props.votePost({id, vote});
  }

  render() {
    const { post, removePost } = this.props
    const id = post.id

    let timestamp = new Date(post.timestamp)

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    }

    let postDate = timestamp.toLocaleTimeString("en-us", options)

    return(

      <div className="col-sm-12 post">
        <Link to={`/${post.category}/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <div className="post-meta">
          <span>posted by {post.author} on {postDate} in <Link to={`/${post.category}`}>{capitalize(String(post.category))}</Link> category</span>
          <span>{post.commentCount} comments</span>
          <span className="vote-score">
            <button onClick={() => this.voteClicker(id, 'downVote')} className="btn btn-primary">&darr;</button>
            <label>{post.voteScore}</label>
            <button onClick={() => this.voteClicker(id, 'upVote')} className="btn btn-primary">&uarr;</button>
          </span>
          <button onClick={() => removePost({id})} className="btn btn-primary">Delete</button>
        </div>
      </div>

    )
  }

}

export default Post
