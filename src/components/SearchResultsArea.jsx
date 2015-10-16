import React, { Component, PropTypes } from 'react'

export default class SearchResultsArea extends Component {
  render() {
    console.log("SEARCH RESULTS AREA RENDERED", this.props)

    return (
      <div>hello world</div>
    );
  }
}

SearchResultsArea.propTypes = {
  searchResults: PropTypes.array.isRequired
}
