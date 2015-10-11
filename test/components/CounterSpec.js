import React from 'react/addons';
import Counter from '../../src/components/Counter';

const TestUtils = React.addons.TestUtils;

function setup() {
  const actions = {
    increment: jasmine.createSpy('increment'),
    decrement: jasmine.createSpy('decrement')
  };
  const component = TestUtils.renderIntoDocument(<Counter counter={1} {...actions} />);
  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button.getDOMNode();
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p').getDOMNode()
  };
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.textContent).toMatch(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[0]);
    expect(actions.increment).toHaveBeenCalled();
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[1]);
    expect(actions.decrement).toHaveBeenCalled();
  });
});
