import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { removePost, fetchSinglePost } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const capitalize = require('capitalize');

class SinglePost extends Component {

  componentDidMount() {

    this.props.fetchSinglePost(this.props.match.params.id)

  }

  render() {

    const post = this.props.post

    console.log(this.props)
    console.log(post)

    let timestamp = new Date(post.timestamp);

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    let postDate = timestamp.toLocaleTimeString("en-us", options);

    return(

      <section className="row single-post">
        {post.deleted && (
          <Redirect to={'/'}/>
        )}

        <div className="col-xs-12">

          <h2>{post.title}</h2>

          <div className="post-meta">
            <span>posted by {post.author} on {postDate} in <Link to={`/${post.category}`}>{capitalize(String(post.category))}</Link> category</span>
            <span>0 comments</span>
            <span className="score">
              <label htmlFor={post.id}>post score</label>
              <input type="number" id={post.id} value={post.voteScore} />
            </span>
            <span>
              <Link to={`/edit`}>Edit</Link> | <a href="#" onClick={() => removePost(post.id)}>Delete</a>
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

function mapStateToProps ({post}) {
  return {
    post: post,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => dispatch(removePost(data)),
    fetchSinglePost: (data) => dispatch(fetchSinglePost(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost));
