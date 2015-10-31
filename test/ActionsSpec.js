import {SEARCH_STARTED, SEARCH_SUCCEEDED, search} from '../src/actions'
import dependencyInjector from '../src/DependencyInjector'

describe('actions', () => {
  describe('search', () => {
    it('works in some fashion', (done) => {
      let calls = 0

      const fakeResponse = {
        json: function() {
          return '{"foo":"bar"}'
        }
      }

      const fakeDispatch = function(input) {
        if (calls === 0) {
          expect(input).toEqual({type: SEARCH_STARTED})
        }

        if (calls === 1) {
          expect(input).toEqual({type: SEARCH_SUCCEEDED, searchResult: '{"foo":"bar"}'})
          done()
        }

        calls++
      }

      spyOn(dependencyInjector, 'fetch').and.returnValue(Promise.resolve(fakeResponse))

      const result = search({target: {data: "HarryPotter"}})
      result(fakeDispatch)
    })
  })
})
