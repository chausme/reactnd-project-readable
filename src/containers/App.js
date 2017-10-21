import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import SinglePost from '../components/SinglePost'
import { fetchCategories, fetchPosts, createPost, removePost } from '../actions'
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {

    this.props.fetchCategories()
    this.props.fetchPosts()

  }

  render() {

    const { general, categories, posts, createPost, removePost } = this.props

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

function mapStateToProps ({general, categories, posts}) {
  return {
    general: general,
    categories: Object.values(categories),
    posts: Object.values(posts),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (data) => dispatch(createPost(data)),
    removePost: (data) => dispatch(removePost(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
