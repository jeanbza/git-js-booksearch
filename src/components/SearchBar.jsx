import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <input type="text" name="search-bar" placeholder="Harry Potter" />
        </div>
      </form>
    );
  }
}
