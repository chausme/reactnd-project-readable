import React, { Component } from 'react';

class Sort extends Component {

  render() {

    return(

      <div className="col-xs-12">
        <div className="sort">
          <select>
            <option>sortby:</option>
            <option>votes</option>
            <option>date</option>
          </select>
        </div>
      </div>

    )
  }

}

export default Sort
