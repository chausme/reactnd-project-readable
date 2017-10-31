import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { fetchPost, removePost } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const capitalize = require('capitalize')

class SinglePost extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {

    const url = this.props.match.url
    const post = this.props.post
    const id = post.id
    const { removePost } = this.props

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
            <span>0 comments</span>
            <span className="score">
              <label htmlFor={id}>post score</label>
              <input type="number" id={id} value={post.voteScore} />
            </span>
            <span>
              <Link to={url + '/edit'}>Edit</Link> | <Link to='/' onClick={() => removePost({id})}>Delete</Link>
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
    post: post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => dispatch(removePost(data)),
    fetchPost: (data) => dispatch(fetchPost(data)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost))
