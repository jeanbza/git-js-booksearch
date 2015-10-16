import { SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from '../actions'

export default function search(state = {}, action) {
  switch (action.type) {
  case SEARCH_STARTED:
    return state
  default:
    return state
  }
}

export default function searchResults(state = {}, action) {
  switch (action.type) {
  case SEARCH_SUCCEEDED:
    console.log("search succeeded")

    const books = action.searchResult.items.map(function(item) {
      return {
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        description: item.volumeInfo.description,
        buyLink: item.saleInfo.buyLink
      }
    })

    // state.results = books
    return books
  case SEARCH_FAILED:
    console.log("search failed")
    return state
  default:
    return state
  }
}
