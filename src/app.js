import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import configureStore from './store/configureStore';
import Counter from './components/Counter'
import * as CounterActions from './actions/counter'

const store = configureStore();

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Counter);

React.render(
  <Provider store={store}>
  {() => <ConnectedApp />}
  </Provider>,
  document.getElementById('root')
);
