import React, { Component } from 'react';

class SinglePost extends Component {

  render() {

    const post = this.props.location.state.post

    console.log(post);

    return(

      <section className="row single-post">

        <div className="col-xs-12">
          <div className="content entry">
            {post.title} with id = {post.id}
          </div>
        </div>

      </section>

    )
  }

}

export default SinglePost
