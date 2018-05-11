import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';

class Mapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation/>
          <Route path={"/"} component={Home} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Mapper;

ReactDOM.render(<Mapper />, document.getElementById('mapper'));
