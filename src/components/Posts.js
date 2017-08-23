import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Post from '../components/Post';

class Posts extends Component {

  render() {

    const { categories, posts } = this.props

    return(

      <section className="row posts">

        <Categories categories={categories}/>

        <Sort />

        <div className="col-xs-12">
          <div className="row">
            {posts.map((post) => (

              <Route exact path={`/:foo(${post.category})*`} key={post.id} render={() => (
                <Post post={post} />
              )}/>

            ))}

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
