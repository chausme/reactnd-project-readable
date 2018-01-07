import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {

  render() {

    return(

        <div className="col-xs-12">
          <div className="content entry">
            <h3>404.</h3>
            <p>This is not the web page you are looking for.</p>
            <p><Link to={`/`}>Back</Link></p>
          </div>
        </div>

    )
  }

}

export default NotFound
