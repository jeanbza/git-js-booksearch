import {SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED, search} from '../src/actions'
import dependencyInjector from '../src/DependencyInjector'

describe('actions', () => {
  describe('search', () => {
    it('dispatches SEARCH_STARTED immediately', (done) => {
      let calls = 0

      const fakeDispatcher = function(input) {
        if (calls === 0) {
          expect(input).toEqual({type: SEARCH_STARTED})
          done()
        }

        calls++
      }

      const result = search({target: {data: ""}})
      result(fakeDispatcher)
    })

    it('dispatches SEARCH_SUCCEEDED with search results after promise is resolved', (done) => {
      let calls = 0

      const fakeResponse = {
        json: function() {
          return '{"foo":"bar"}'
        }
      }

      const fakeDispatch = function(input) {
        if (calls === 1) {
          expect(input).toEqual({type: SEARCH_SUCCEEDED, searchResult: '{"foo":"bar"}'})
          done()
        }

        calls++
      }

      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.resolve(fakeResponse))

      const result = search({target: {data: ""}})
      result(fakeDispatch)
    })

    it('dispatches SEARCH_FAILED after promise is rejected', (done) => {
      let calls = 0

      const fakeDispatch = function(input) {
        if (calls === 1) {
          expect(input).toEqual({type: SEARCH_FAILED, searchError: 'womp womp'})
          done()
        }

        calls++
      }

      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.reject('womp womp'))

      const result = search({target: {data: ""}})
      result(fakeDispatch)
    })
  })
})
