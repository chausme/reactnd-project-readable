import React, { Component } from 'react'

class Comments extends Component {

  render() {

    const comments = this.props.comments

    return(

      <div className="comments">

        {comments}

      </div>

    )
  }

}

export default Comments
