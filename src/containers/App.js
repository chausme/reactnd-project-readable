import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';
import SinglePost from '../components/SinglePost';

class App extends Component {

  state = {
    categories: [],
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }}).then((data) => {
      data.json().then((data) => {
        this.setState({ categories: data.categories })
      })
    })
    fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }}).then((data) => {
      data.json().then((data) => {
        this.setState({ posts: data })
      })
    })
  }

  render() {

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
              <Route exact path='/create' component={CreatePost} />
              <Route exact path='/:category?' render={() => (
                <Posts categories={this.state.categories} posts={this.state.posts} />
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

export default App;
