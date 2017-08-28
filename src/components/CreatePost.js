import React, { Component } from 'react';
import { Redirect } from 'react-router'

const capitalize = require('capitalize');

class CreatePost extends Component {

  render() {

    const {onCreate, onChange, postRedirect, categories} = this.props

    return(

      <section className="row create-post">

        <div className="col-xs-12">

          <h2>Create new post</h2>

          <form onSubmit={(e) => onCreate(e)}>
            <div className="field">
              <input type="text" name="author" placeholder="Author" onChange={(e) => onChange(e)} />
            </div>
            <div className="field">
              <input type="text" name="title" placeholder="Post title" onChange={(e) => onChange(e)} />
            </div>
            <div className="field">
              <select defaultValue="Category:" name="category" onChange={(e) => onChange(e)}>
                <option disabled>Category:</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.path}>{capitalize(category.name)}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <textarea placeholder="Post content" name="body" onChange={(e) => onChange(e)}></textarea>
            </div>
            <div className="field">
              <input type="submit" value="Create" className="btn btn-primary btn-success" />
            </div>
          </form>
          {postRedirect && (
            <Redirect to={'/success'}/>
          )}
        </div>

      </section>

    )
  }

}

export default CreatePost
