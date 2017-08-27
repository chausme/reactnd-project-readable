import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';
import SinglePost from '../components/SinglePost';
import Success from '../components/Success';

const uuidv4 = require('uuid/v4');

class App extends Component {

  state = {
    categories: [],
    posts: [],
    title: '',
    author: '',
    body: '',
    category: '',
    createPostRedirect: false
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

  submitPost = (e) => {

    let data = {
        id: uuidv4(),
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category
    }

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'dmfR05SBzsxn30'
        }
    }

    fetch('http://localhost:5001/posts', fetchData)
    .then(response => {
     return response.json().then(data => {
       if (response.ok) {
         this.setState({ createPostRedirect: true })
         fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }}).then((data) => {
           data.json().then((data) => {
             this.setState({ posts: data, createPostRedirect: false })
           })
         })
         return data;
       } else {
         return Promise.reject({status: response.status, data});
       }
     });
    }).catch(error => console.log('error is', error));

    e.preventDefault();

  }

  updateField = (e) => {

    let fieldValue = e.target.value;

    this.setState({ [e.target.name]:fieldValue })

    console.log(this.state);

    e.preventDefault();

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
              <Route exact path='/success' render={() => (
                <Success />
              )}/>
              <Route exact path='/create' render={() => (
                <CreatePost categories={this.state.categories} onCreate={this.submitPost} onChange={this.updateField} fromRedirect={this.state.createPostRedirect} />
              )}/>
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
