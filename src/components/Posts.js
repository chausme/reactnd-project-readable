import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Categories from '../components/Categories';
import Sort from '../components/Sort';

class Posts extends Component {

  render() {

    const categories = this.props.categories

    return(

      <section className="row posts">

        <Categories categories={categories}/>

        <Sort />

        <div className="col-xs-12">
          <div className="row">

            <Route exact path='/:foo(react)*' render={() => (
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

              </div>
            )}/>

            <Route exact path='/:foo(redux)*' render={() => (
              <div className="col-sm-12 post">
                <Link to="/react/6ni6ok3ym7mf1p33lnez"><h2>Post title 2</h2></Link>
                <div className="post-meta">
                  <span>posted by [author] on [timestamp] in <a href="#">[category name]</a> category</span>
                  <span>0 comments</span>
                  <span className="score">
                    <label htmlFor="6ni6ok3ym7mf1p33lnez">post score</label>
                    <input type="number" id="6ni6ok3ym7mf1p33lnez" value="2" />
                  </span>
                </div>

                <div className="excerpt entry">
                  [trimmed post content]
                </div>

              </div>
            )}/>

          </div>
        </div>

        <div className="col-xs-12 text-center">
          <div className="row">
            <Link to="/create" className="btn btn-primary btn-success">Create a new post</Link>
          </div>
        </div>

      </section>

    )
  }

}

export default Posts
