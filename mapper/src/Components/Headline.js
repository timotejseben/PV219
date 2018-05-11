import React, { Component } from 'react';
import Map from './Map';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }
  
  searching(e) {
    this.setState({
      search: e.target.value,
      results: e.target.value !== "" ? [e.target.value] : []
    });
  }

  render() {
    let Results = this.state.results.map(result => {
      return <li>{ result }</li>
    });
    return (
    );
  }
}

export default Headline;
