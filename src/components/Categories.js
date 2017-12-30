import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const capitalize = require('capitalize')

class Categories extends Component {

  render() {

    let categories = this.props.categories

    return(

      <div className="col-xs-12 categories">
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={"/" + category.path} className="btn btn-primary">{capitalize(category.name)}</Link>
                </li>
              ))}
            </ul>
      </div>

    )
  }

}

export default Categories
