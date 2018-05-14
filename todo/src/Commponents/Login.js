import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className={"login"}>
        <h2>
          Hello. Just log-in.
        </h2>
        <form>
          <input type="text" name="" id=""/>
          <input type="password" name="" id=""/>
          <Link to="/todos" className={"btn"}>Prihlásiť</Link>
          {/* <button type="submit">Prihlásiť</button> */}
        </form>
      </div>
    );
  }
}
