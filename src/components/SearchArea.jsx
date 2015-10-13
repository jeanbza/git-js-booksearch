import React, { Component, PropTypes } from 'react'
import SearchBar from './SearchBar'
import Counter from './Counter'

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        <Counter increment={this.props.increment}
          decrement={this.props.decrement}
          counter={this.props.counter} />
        <SearchBar />
      </div>
    )
  }
}

SearchArea.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}
