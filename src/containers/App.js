import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import AddComment from '../components/AddComment'
import EditComment from '../components/EditComment'
import SinglePost from '../components/SinglePost'
import NotFound from '../components/NotFound'
import { fetchCategories } from '../actions/categories'
import { fetchPosts, createPost, removePost, updatePost, votePost, sortPosts } from '../actions/posts'
import { fetchComments, createComment, updateComment } from '../actions/comments'

import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {

    this.props.fetchCategories()
    this.props.fetchPosts()

  }

  render() {

    const {
      general,
      categories,
      posts,
      createPost,
      removePost,
      updatePost,
      votePost,
      sortPosts,
      createComment,
      updateComment,
      location
    } = this.props

    // Check if category exists
    let path = location.pathname.split('/'),
        categoryError;

    if (location.pathname !== '/' && path.length < 3) {

      if (categories.filter(e => e.name === path[1]).length < 1) {
        categoryError = 1;
      }

    }

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
                <div className="render">
                  {categoryError !== 1 ? (
                  <Posts categories={categories} posts={posts} removePost={removePost} votePost={votePost} sortPosts={sortPosts} />
                  ) : (
                    <section className="row posts">
                      <NotFound />
                    </section>
                  )}
                </div>
              )}/>

              <Route exact path='/:category/:id' render={(props) => (
                <SinglePost general={general} {...props} />
              )}/>

              <Route exact path='/add-comment/:category/:id/' render={(props) => (
                <AddComment general={general} createComment={createComment} {...props} />
              )}/>

              <Route exact path='/edit-comment/:category/:id/:commentId' render={(props) => (
                <EditComment general={general} updateComment={updateComment} {...props} />
              )}/>

              <Route path="*" component={NotFound} />

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

  function sortBy(posts, sort) {

    if (sort === 'sortByVotes') {
      posts.sort(function(a, b) {
        return b.voteScore - a.voteScore;
      });
    } else if (sort === 'sortByDate') {
      posts.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    }
  }

  let filteredPosts;

  // Check if posts have been fecthed
  if (('posts' in posts)) {
    filteredPosts = Object.values(posts.posts).filter((post) => post.deleted === false)
    sortBy(filteredPosts, posts.sort)
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
    votePost: (data) => dispatch(votePost(data)),
    sortPosts: (data) => dispatch(sortPosts(data)),
    fetchComments: (data) => dispatch(fetchComments(data)),
    createComment: (data) => dispatch(createComment(data)),
    updateComment: (data) => dispatch(updateComment(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
