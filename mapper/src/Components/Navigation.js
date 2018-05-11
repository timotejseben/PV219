import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

import options from '../data';

const filterData = (inputValue: string) => 
  options.filter( (i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterData(inputValue));
  }, 1000);
};

export default class Monuments extends Component {
  state = {
    searched: ''
  }
  handleInputChange = (selected) => {
    this.setState({searched: selected.value});
  }
  render() {
    return (
      <nav>
        { this.state.searched ? <Redirect to={'/monument/'+this.state.searched }/> : null }
        <AsyncSelect
          id={"search"}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={this.handleInputChange}
          placeholder={"Nájdi si pamiatku"}
        />        <Link to={"/"}>Mapper</Link>
        <Link to={"/monuments"}>Monuments</Link>
      </nav>
    );
  }
}
