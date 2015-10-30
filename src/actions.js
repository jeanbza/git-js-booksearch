export const SEARCH_STARTED = 'SEARCH_STARTED'
export const SEARCH_SUCCEEDED = 'SEARCH_SUCCEEDED'
export const SEARCH_FAILED = 'SEARCH_FAILED'

import 'whatwg-fetch'

export function search(searchBarEvent) {
  const searchBarData = searchBarEvent.target.value

  return (dispatch) => {
    dispatch({
      type: SEARCH_STARTED,
      searchBarData: searchBarData
    })

    return fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchBarData)
      .then(function(response) {
        console.log('response success', response)
        return response.json()
      }).then(function(json) {
        dispatch({type: SEARCH_SUCCEEDED, searchResult: json})
        console.log('parsing success')
      }).catch(function(ex) {
        dispatch({type: SEARCH_FAILED, searchError: ex})
        console.log('parsing failed', ex)
      })
  }
}
