import { SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from '../actions'

export default function search(state = {}, action) {
  switch (action.type) {
  case SEARCH_STARTED:
    console.log("search started!")
    return state
  case SEARCH_SUCCEEDED:
    console.log(action.searchResult)

    console.log("search finished!")
    return state
  case SEARCH_FAILED:
    console.log("search failed!")
    return state
  default:
    return state
  }
}
