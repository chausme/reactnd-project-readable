import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { fetchPost, removePost, votePost, fetchComments } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Comments from '../components/Comments'

const capitalize = require('capitalize')

class SinglePost extends Component {

  voteClicker(id, vote){
    this.props.votePost({id, vote});
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {

    const url = this.props.match.url
    const post = this.props.post.post
    const id = post.id
    const comments = this.props.post.comments
    const { removePost, votePost, fetchComments } = this.props

    let timestamp = new Date(post.timestamp)

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    }

    let postDate = timestamp.toLocaleTimeString("en-us", options)

    return(

      <section className="row single-post">

        <div className="col-xs-12">

        <a href="" onClick={() => this.props.history.go(-1)}>Back</a>

          <h2>{post.title}</h2>

          <div className="post-meta">
            <span>posted by {post.author} on {postDate} in <Link to={`/${post.category}`}>{capitalize(String(post.category))}</Link> category</span>
            <span>[#] comments</span>
            <span className="vote-score">
              <button onClick={() => this.voteClicker(id, 'downVote')} className="btn btn-primary">&darr;</button>
              <label>{post.voteScore}</label>
              <button onClick={() => this.voteClicker(id, 'upVote')} className="btn btn-primary">&uarr;</button>
            </span>
            <span>
              <Link to={url + '/edit'}>Edit</Link> | <Link to='/' onClick={() => removePost({id})}>Delete</Link>
            </span>
          </div>

          <div className="content entry">
            {post.body}
          </div>

          <Comments comments={comments} />

        </div>
      </section>

    )
  }

}

function mapStateToProps ({post}) {
  return {
    post: {
        post : post.post,
        comments: post.comments
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => dispatch(removePost(data)),
    fetchPost: (data) => dispatch(fetchPost(data)),
    votePost: (data) => dispatch(votePost(data)),
    fetchComments: (data) => dispatch(fetchComments(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost))
