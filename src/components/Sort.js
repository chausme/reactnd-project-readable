import React, { Component } from 'react'

class Sort extends Component {

  render() {

    const { sortItems } = this.props

    return(

      <div className="col-xs-12">
        <div className="sort">
          <p>Sort by</p>
          <select onChange={event => sortItems(event.target.value)}>
            <option value="sortByVotes">votes</option>
            <option value="sortByDate">date</option>
          </select>
        </div>
      </div>

    )
  }

}

export default Sort
