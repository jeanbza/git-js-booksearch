import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as actions from '../src/actions'

const middlewares = [thunk];

function mockStore(getState, expectedActions, onLastAction) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.')
  }

  if (typeof onLastAction !== 'undefined' && typeof onLastAction !== 'function') {
    throw new Error('onLastAction should either be undefined or function.')
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ? getState() : getState
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift()
        expect(action).toEqual(expectedAction);

        if (onLastAction && !expectedActions.length) {
          onLastAction()
        }

        return action
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(...middlewares)(mockStoreWithoutMiddleware)

  return mockStoreWithMiddleware()
}

describe('actions', () => {
  describe('search', () => {
    const fakeSearchBarEvent = {
      target: {
        value: "foo"
      }
    }

    const searchResultCallback = actions.search(fakeSearchBarEvent)

    console.dir("BOOM")
    console.dir(searchResultCallback)
    console.dir("BAM")

    // expect(actions.search(fakeSearchBarEvent)).toEqual({
    //   type: SEARCH_STARTED,
    //   searchBarData: "foo"
    // })
  })
})
