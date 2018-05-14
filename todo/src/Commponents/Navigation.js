import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="brand">MyTodos</Link>
        <ul>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
