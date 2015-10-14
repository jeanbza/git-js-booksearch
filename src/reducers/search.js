import { SEARCH } from '../actions'

export default function search(state = {}, action) {
  switch (action.type) {
  case SEARCH:
    state.searchBarData = action.searchBarData

    // do something ajax-y here?

    return state
  default:
    return state
  }
}
