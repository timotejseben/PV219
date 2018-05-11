import React, { Component } from 'react';

import options from '../data';

const filterData = (value: string) => 
  options.filter( (i) =>
    i.value === value
  );

class Monument extends Component {
  state = {
    monument: filterData(this.props.match.params.id)[0]
  }
  render() {
    return (
      <div className={"paper monument"}>
        <h1>{ this.state.monument.label }</h1>
        { this.state.monument.about }
      </div>
    );
  }
}

export default Monument;
