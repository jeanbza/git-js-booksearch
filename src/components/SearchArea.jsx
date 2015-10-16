import React, { Component, PropTypes } from 'react'
import SearchBar from './SearchBar'
import SearchResultsArea from './SearchResultsArea'
import Counter from './Counter'

export default class SearchArea extends Component {
  render() {
    console.log("RENDERING SEARCH AREA", this.props)

    return (
      <div>
        <Counter increment={this.props.increment}
          decrement={this.props.decrement}
          counter={this.props.counter} />

        <SearchBar search={this.props.search} />

        <SearchResultsArea searchResults={this.props.searchResults} />
      </div>
    )
  }
}

SearchArea.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
}
