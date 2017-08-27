import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const capitalize = require('capitalize');

class SinglePost extends Component {

  render() {

    const post = this.props.location.state.post

    console.log(post);

    return(

      <section className="row single-post">

        <div className="col-xs-12">

          <h2>{post.title}</h2>

          <div className="post-meta">
            <span>posted by {post.author} on {post.timestamp} in <Link to={`/${post.category}`}>{capitalize(post.category)}</Link> category</span>
            <span>0 comments</span>
            <span className="score">
              <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
              <input type="number" id="8xf0y6ziyjabvozdd253nd" defaultValue={post.voteScore} />
            </span>
            <span>
              <Link to={`/edit`}>Edit</Link> | <Link to={`/delete`}>Delete</Link>
            </span>
          </div>

          <div className="content entry">
            {post.body}
          </div>

          <div className="comments">

            [comments section]

          </div>

        </div>

      </section>

    )
  }

}

export default SinglePost
