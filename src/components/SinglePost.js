import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const capitalize = require('capitalize');

class SinglePost extends Component {

  deletePost = (e, post) => {

    fetch('http://localhost:5001/posts/' + post.id, { method: 'DELETE', headers: { 'Authorization': 'dmfR05SBzsxn30' } }).then((data) => {
      data.text().then((data) => {
        console.log('post deleted!');
      })
    })

    e.preventDefault();

  }

  render() {

    const post = this.props.location.state.post

    console.log(post);

    let timestamp = new Date(post.timestamp);

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    let postDate = timestamp.toLocaleTimeString("en-us", options);

    return(

      <section className="row single-post">

        <div className="col-xs-12">

          <h2>{post.title}</h2>

          <div className="post-meta">
            <span>posted by {post.author} on {postDate} in <Link to={`/${post.category}`}>{capitalize(post.category)}</Link> category</span>
            <span>0 comments</span>
            <span className="score">
              <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
              <input type="number" id="8xf0y6ziyjabvozdd253nd" defaultValue={post.voteScore} />
            </span>
            <span>
              <Link to={`/edit`}>Edit</Link> | <a href="" onClick={(e) => this.deletePost(e, post)}>Delete</a>
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
