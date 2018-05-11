import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Map from './Map';
import Monument from './Monument';
import Monuments from './Monuments';

class Home extends Component {
  render() {
    return (
      <div className="headline">
        <Map />
        <Route exact path={"/monument/:id"} component={Monument} />
        <Route exact path={"/monuments"} component={Monuments} />
      </div>
    );
  }
}

export default Home;
