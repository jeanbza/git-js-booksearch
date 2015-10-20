import React from 'react/addons';
import SearchBar from '../../src/components/SearchBar';

const TestUtils = React.addons.TestUtils;

function setup() {
  const actions = {
    search: jasmine.createSpy('search')
  };
  const component = TestUtils.renderIntoDocument(<SearchBar {...actions} />);
  return {
    component: component,
    actions: actions,
    input: TestUtils.findRenderedDOMComponentWithTag(component, 'input').getDOMNode()
  };
}

describe('SearchBar component', () => {
  it('calls search on text input', () => {
    const { input, actions } = setup();
    TestUtils.Simulate.change(input);
    expect(actions.search).toHaveBeenCalled();
  });
});
