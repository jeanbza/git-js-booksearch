import {SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED, search} from './../src/actions'
import dependencyInjector from './../src/DependencyInjector'
import FakeDispatcher from './helpers/FakeDispatcher'

describe('actions', () => {
  describe('search', () => {
    it('uses target.value to query google books api', () => {
      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.resolve({json: () => ''}))

      const result = search({target: {value: 'some-test-input'}})
      result(function() {})

      expect(dependencyInjector.fetch).toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=some-test-input')
    })

    it('dispatches SEARCH_STARTED immediately', (done) => {
      const fakeDispatcher = new FakeDispatcher(0, done, function(input) {
        expect(input).toEqual({type: SEARCH_STARTED})
      })

      const result = search({target: {}})
      result((input) => fakeDispatcher.fakeDispatch(input))
    })

    it('dispatches SEARCH_SUCCEEDED with search results after promise is resolved', (done) => {
      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.resolve({json: () => '{"foo":"bar"}'}))

      const fakeDispatcher = new FakeDispatcher(1, done, function(input) {
        expect(input).toEqual({type: SEARCH_SUCCEEDED, searchResult: '{"foo":"bar"}'})
      })

      const result = search({target: {}})
      result((input) => fakeDispatcher.fakeDispatch(input))
    })

    it('dispatches SEARCH_FAILED after promise is rejected', (done) => {
      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.reject('womp womp'))

      const fakeDispatcher = new FakeDispatcher(1, done, function(input) {
        expect(input).toEqual({type: SEARCH_FAILED, searchError: 'womp womp'})
      })

      const result = search({target: {}})
      result((input) => fakeDispatcher.fakeDispatch(input))
    })
  })
})
