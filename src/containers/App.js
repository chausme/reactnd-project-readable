import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';
import SinglePost from '../components/SinglePost';
import Success from '../components/Success';
import { removePost, fetchCategories, fetchPosts, createPost } from '../actions'
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {

    this.props.fetchCategories()
    this.props.fetchPosts()

  }

  render() {

    const { categories, posts, removePost, createPost } = this.props

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
              <Route exact path='/success' render={() => (
                <Success />
              )}/>
              <Route exact path='/create' render={() => (
                <CreatePost categories={categories} createPost={createPost} />
              )}/>
              <Route exact path='/:category?' render={() => (
                <Posts categories={categories} posts={posts} removePost={removePost} />
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

function mapStateToProps ({categories, posts}) {
  return {
    categories: Object.values(categories),
    posts: Object.values(posts),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => dispatch(removePost(data)),
    createPost: (data) => dispatch(createPost(data)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
