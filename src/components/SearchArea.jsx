import React, { Component, PropTypes } from 'react'
import SearchBar from './SearchBar';

export default class SearchArea extends Component {
  render() {
    return (
      <SearchBar />
    );
  }
}

SearchArea.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
