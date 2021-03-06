import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Post from '../components/Post'

class Posts extends Component {

  render() {

    const { categories, posts, removePost, votePost, sortPosts } = this.props

    return(

      <section className="row posts">

            <Categories categories={categories}/>

            <Sort sortItems={sortPosts} />

            {('posts' in posts) &&

              <div className="col-xs-12">
                <div className="row">

                  {posts.posts.map((post) => (

                    <Route exact path={`/:category(${post.category})*`} key={post.id} render={() => (
                      <Post post={post} removePost={removePost} votePost={votePost} />
                    )}/>

                  ))}

                </div>
              </div>

            }

            <div className="bottom col-xs-12 text-center">
              <div className="row">
              <div className="col-xs-12">
                <Link to="/create" className="btn btn-primary btn-success">Create a new post</Link>
              </div>
              </div>
            </div>

      </section>

    )

  }

}

export default Posts
