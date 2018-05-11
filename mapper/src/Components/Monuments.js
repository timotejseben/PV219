import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import options from '../data';


class Monuments extends Component {
  render() {
    const monumentsList = options.map((e) => {
      return <li><Link to={"/monument/"+e.value}>{ e.label }</Link></li>    
    });
    return (
      <div className={"paper monument"}>
        <h1>Všetky pamiatky:</h1>
        <ul className="list">
          { monumentsList }
        </ul>
      </div>
    );
  }
}

export default Monuments;
