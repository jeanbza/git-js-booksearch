import TestUtils from 'react-addons-test-utils'
import SearchBar from '../../src/components/SearchBar'

import React from 'react' // TODO: Why is this required??

function setup() {
  const actions = {
    search: jasmine.createSpy('search')
  };
  const component = TestUtils.renderIntoDocument(<SearchBar {...actions} />)
  return {
    component: component,
    actions: actions,
    input: TestUtils.findRenderedDOMComponentWithTag(component, 'input')
  };
}

describe('SearchBar component', () => {
  it('triggers the search action on text input', () => {
    const { input, actions } = setup()
    TestUtils.Simulate.change(input)
    expect(actions.search).toHaveBeenCalled()
  })
})
