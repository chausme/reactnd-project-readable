import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actionsPosts from '../actions/posts'
import * as actionsComments from '../actions/comments'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Comments from '../components/Comments'
import NotFound from '../components/NotFound'

const capitalize = require('capitalize')

class SinglePost extends Component {

  voteClicker(id, vote){
    this.props.votePost({id, vote});
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
    this.props.fetchComments(this.props.match.params.id)
  }

  render() {

    const url = this.props.match.url
    const post = this.props.post.post

    const id = post.id
    const { comments, removePost, removeComment, voteComment, sortComments } = this.props

    let timestamp = new Date(post.timestamp)

    let options = {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    }

    let postDate = timestamp.toLocaleTimeString("en-us", options)

    return(

        <section className="row single-post">

          {!post.error && post.deleted === false ? (

          <div className="col-xs-12">

            <Link to={`/`}>Back</Link>

            <h2>{post.title}</h2>

            <div className="post-meta">
              <span>posted by {post.author} on {postDate} in <Link to={`/${post.category}`}>{capitalize(String(post.category))}</Link> category</span>
              <span>{post.commentCount} comments</span>
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

            <Comments comments={comments} url={url} removeComment={removeComment} voteComment={voteComment} sortComments={sortComments} />

          </div>

          ) : (
            <NotFound />
          )}

        </section>

    )
  }

}

function mapStateToProps ({post, comments}) {

  function sortBy(comments, sort) {

    if (sort === 'sortByVotes') {
      comments.sort(function(a, b) {
        return b.voteScore - a.voteScore;
      });
    } else if (sort === 'sortByDate') {
      comments.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    }
  }

  let filteredComments;

  if (('comments' in comments)) {
    filteredComments = Object.values(comments.comments).filter((comment) => comment.deleted === false)
    sortBy(filteredComments, comments.sort)
  }

  return {
    post: {
        post : post.post,
    },
    comments: {
      comments: filteredComments,
      sort: comments.sort
    }
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...actionsPosts, ...actionsComments}, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost))
