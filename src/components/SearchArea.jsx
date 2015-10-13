import React, { Component, PropTypes } from 'react'
import Counter from './Counter'

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        This is the search area
        <Counter counter={this.props.counter}
          increment={this.props.increment}
          decrement={this.props.decrement} />
      </div>
    );
  }
}

SearchArea.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
