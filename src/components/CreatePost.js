import React, { Component } from 'react';
import { Redirect } from 'react-router'

class CreatePost extends Component {

  render() {

    const {onCreate, onChange, fromRedirect} = this.props

    return(

      <section className="row create-post">

        <div className="col-xs-12">

          <h2>Create new post</h2>

          <form onSubmit={(e) => onCreate(e)}>
            <div className="field">
              <input type="text" name="title" placeholder="Post title" onChange={(e) => onChange(e)} />
            </div>
            <div className="field">
              <select name="category" onChange={(e) => onChange(e)}>
                <option>Category:</option>
                <option>React</option>
                <option>Redux</option>
                <option>Udacity</option>
              </select>
            </div>
            <div className="field">
              <textarea placeholder="Post content" name="body" onChange={(e) => onChange(e)}></textarea>
            </div>
            <div className="field">
              <input type="submit" value="Create" className="btn btn-primary btn-success" />
            </div>
          </form>
          {fromRedirect && (
            <Redirect to={'/success'}/>
          )}
        </div>

      </section>

    )
  }

}

export default CreatePost
