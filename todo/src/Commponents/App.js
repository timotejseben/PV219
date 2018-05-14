import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import Todos from './Todos';
import Goals from './Goals';
import NoMatch from './NoMatch';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header>
            <Navigation />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/todos" component={Todos} />
              <Route path="/goals" component={Goals} />
              <Route component={NoMatch} status={404} />
            </Switch>
          </main>
          <footer>
            Copyright &copy; Timotej šebeň 2018
          </footer>
        </Fragment>
      </BrowserRouter>
    );
  }
}
