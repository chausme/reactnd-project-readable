import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const capitalize = require('capitalize')

class Post extends Component {

  render() {
    const { post, removePost } = this.props
    const id = post.id

    return(

      <div className="col-sm-12 post">
        <Link to={`/${post.category}/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <div className="post-meta">
          <span>posted by {post.author} on {post.timestamp} in <Link to={`/${post.category}`}>{capitalize(post.category)}</Link> category</span>
          <span>0 comments</span>
          <span className="score">
            <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
            <input type="number" id="8xf0y6ziyjabvozdd253nd" defaultValue={post.voteScore} />
          </span>
          <button onClick={() => removePost({id})} className="btn btn-primary">Delete</button>
        </div>
      </div>

    )
  }

}

export default Post
