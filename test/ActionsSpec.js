import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as actions from '../src/actions'

const middlewares = [thunk];

function mockStore(getState, expectedActions, onLastAction) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.');
  }

  if (typeof onLastAction !== 'undefined' && typeof onLastAction !== 'function') {
    throw new Error('onLastAction should either be undefined or function.');
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ? getState() : getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();
        expect(action).toEqual(expectedAction);

        if (onLastAction && !expectedActions.length) {
          onLastAction();
        }

        return action;
      }
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(...middlewares)(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).toEqual({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).toEqual({ type: actions.DECREMENT_COUNTER });
  });
});
