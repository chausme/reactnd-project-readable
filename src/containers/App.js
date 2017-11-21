import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import SinglePost from '../components/SinglePost'
import { fetchCategories, fetchPosts, createPost, removePost, updatePost, votePost } from '../actions'
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {

    this.props.fetchCategories()
    this.props.fetchPosts()

  }

  render() {

    const { general, categories, posts, createPost, removePost, fetchPost, updatePost, votePost } = this.props

    return (
      <div className="App">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Link to="/"><h1>Readable</h1></Link>
                <p>Udacity project</p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">

            <Switch>
              <Route exact path='/create' render={() => (
                <CreatePost categories={categories} general={general} createPost={createPost} />
              )}/>
              <Route exact path='/:category/:id/edit' render={() => (
                <EditPost general={general} updatePost={updatePost} />
              )}/>
              <Route exact path='/:category?' render={() => (
                <Posts categories={categories} posts={posts} removePost={removePost} votePost={votePost} />
              )}/>

              <Route exact path='/:category/:id' component={SinglePost} />

            </Switch>

          </div>
        </main>

        <footer>

          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p><strong>Readable</strong> - Udacity project</p>
              </div>
            </div>
          </div>

        </footer>

      </div>
    );
  }

}

function mapStateToProps ({general, categories, posts}) {

  function sortByVotes(a, b) {
    return b.voteScore - a.voteScore
  }

  function sortByDate(a, b) {
    return b.timestamp - a.timestamp
  }

  let filteredPosts;

  // Check if posts have been fecthed
  if (('posts' in posts)) {
    filteredPosts = Object.values(posts.posts).filter((post) => post.deleted === false)
    let sortBy = posts.sort;
    filteredPosts.sort(sortBy)
  }

  return {
    general: general,
    categories: Object.values(categories),
    posts: {
      sort: posts.sort,
      posts: filteredPosts
    },
  }

}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (data) => dispatch(createPost(data)),
    removePost: (data) => dispatch(removePost(data)),
    updatePost: (data) => dispatch(updatePost(data)),
    votePost: (data) => dispatch(votePost(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
