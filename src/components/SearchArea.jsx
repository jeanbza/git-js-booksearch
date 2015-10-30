import React, { Component, PropTypes } from 'react'
import SearchBar from './SearchBar'
import SearchResultsArea from './SearchResultsArea'

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        <SearchBar search={this.props.search} />

        <SearchResultsArea searchResults={this.props.searchResults} />
      </div>
    )
  }
}

SearchArea.propTypes = {
  search: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
}
