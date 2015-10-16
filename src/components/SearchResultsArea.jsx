import React, { Component, PropTypes } from 'react'

export default class SearchResultsArea extends Component {
  render() {
    const books = this.props.searchResults.map(function(result, index) {
      return (
        <div key={index}>
          <h2>{result.title}</h2>
          <div>{result.subtitle}</div>
        </div>
      )
    })

    return (
      <div>{books}</div>
    );
  }
}

SearchResultsArea.propTypes = {
  searchResults: PropTypes.array.isRequired
}
