import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Categories extends Component {

  render() {

    let categories = this.props.categories;

    return(

      <section className="row categories">

        <div className="col-xs-12">
          <ul className="categories">
            {categories.map((category) => (
              <li key={category.name}>
                <Link to={"/" + category.path} className="btn btn-primary">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

      </section>

    )
  }

}

export default Categories
