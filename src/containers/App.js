import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Categories from '../components/Categories';

class App extends Component {

  state = {
    categories: [],
  }

  componentDidMount() {
    fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }}).then((data) => {
      data.json().then((data) => {
        this.setState({ categories: data.categories })
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
                <h1>Readable</h1>
                <p>Udacity project</p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">

            <Categories categories={this.state.categories}/>

            <section className="row posts">

              <div className="col-xs-12">
                <div className="sort">
                  <select>
                    <option>sortby:</option>
                    <option>votes</option>
                    <option>date</option>
                  </select>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">

                  <Route path='/react' render={() => (
                    <div className="col-sm-12 post">
                      <Link to="/react/8xf0y6ziyjabvozdd253nd"><h2>Post title</h2></Link>
                      <div className="post-meta">
                        <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                        <span>0 comments</span>
                        <span className="score">
                          <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
                          <input type="number" id="8xf0y6ziyjabvozdd253nd" value="2" />
                        </span>
                      </div>

                      <div className="excerpt entry">
                        [trimmed post content]
                      </div>

                      <Route exact path='/react/8xf0y6ziyjabvozdd253nd' render={() => (
                        <div className="content entry">
                          [full post content]
                        </div>
                      )}/>

                    </div>
                  )}/>

                  <div className="col-sm-12 post">
                    <a href="#"><h2>Post title 2</h2></a>
                    <div className="post-meta">
                      <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                      <span>0 comments</span>
                      <span className="score">
                        <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
                        <input type="number" id="8xf0y6ziyjabvozdd253nd" value="2" />
                      </span>
                    </div>
                    <div className="excerpt entry">
                      [trimmed post content]
                    </div>
                  </div>

                  <div className="col-sm-12 post">
                    <a href="#"><h2>Post title 3</h2></a>
                    <div className="post-meta">
                      <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                      <span>0 comments</span>
                      <span className="score">
                        <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
                        <input type="number" id="8xf0y6ziyjabvozdd253nd" value="2" />
                      </span>
                    </div>
                    <div className="excerpt entry">
                      [trimmed post content]
                    </div>
                  </div>

                  <div className="col-sm-12 post">
                    <a href="#"><h2>Post title 4</h2></a>
                    <div className="post-meta">
                      <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                      <span>0 comments</span>
                      <span className="score">
                        <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
                        <input type="number" id="8xf0y6ziyjabvozdd253nd" value="2" />
                      </span>
                    </div>
                    <div className="excerpt entry">
                      [trimmed post content]
                    </div>
                  </div>

                  <div className="col-sm-12 post">
                    <a href="#"><h2>Post title 5</h2></a>
                    <div className="post-meta">
                      <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                      <span>0 comments</span>
                      <span className="score">
                        <label htmlFor="8xf0y6ziyjabvozdd253nd">post score</label>
                        <input type="number" id="8xf0y6ziyjabvozdd253nd" value="2" />
                      </span>
                    </div>
                    <div className="excerpt entry">
                      [trimmed post content]
                    </div>
                  </div>

                </div>
              </div>

            </section>

            <section className="row create-post">

              <div className="col-xs-12">
                <a href="#" className="btn btn-primary btn-success">Create a new post</a>
              </div>

            </section>

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
