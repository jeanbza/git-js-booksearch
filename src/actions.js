export const SEARCH_STARTED = 'SEARCH_STARTED'
export const SEARCH_SUCCEEDED = 'SEARCH_SUCCEEDED'
export const SEARCH_FAILED = 'SEARCH_FAILED'

export function search(searchBarEvent) {
  const searchBarData = searchBarEvent.target.value

  return (dispatch) => {
    dispatch({
      type: SEARCH_STARTED,
      searchBarData: searchBarData
    })

    return new Promise(function(resolve, reject) {
      // TODO: the following can probably be a function

      let req = new XMLHttpRequest()
      req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + searchBarData)
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response)
        } else {
          reject(new Error(req.statusText))
        }
      }

      req.onerror = function() {
        reject(new Error("Network error"))
      }

      req.send()
    })
    .then(JSON.parse)
    .then(
      (result) => dispatch({ type: SEARCH_SUCCEEDED, searchResult: result }),
      (error) =>  dispatch({ type: SEARCH_FAILED, searchError: error })
    )
  }
}
