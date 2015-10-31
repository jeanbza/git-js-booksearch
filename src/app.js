import React from 'react';
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import { bindActionCreators, combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';

import search from './reducers/search'
import SearchArea from './components/SearchArea'
import * as AllActions from './actions'

const store = function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)

  const store = createStoreWithMiddleware(combineReducers({
    search
  }), initialState)

  return store
}()

function mapStateToProps(state) {
  return {
    searchResults: Array.isArray(state.search) ? state.search : []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AllActions, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(SearchArea)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
