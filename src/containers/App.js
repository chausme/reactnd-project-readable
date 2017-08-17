import React, { Component } from 'react';

class App extends Component {
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

            <section className="row">

              <div className="col-xs-12">
                <ul className="categories">
                  <li>
                    <a href="#" className="btn btn-primary">React</a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-primary">Redux</a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-primary">Udacity</a>
                  </li>
                </ul>
              </div>

            </section>

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

                  <div className="col-sm-12 post">
                    <a href="#"><h2>Post title</h2></a>
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
