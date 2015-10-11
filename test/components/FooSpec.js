import Foo from '../../src/components/Foo'
import React from 'react/addons'

const TestUtils = React.addons.TestUtils

describe('Foo component', () => {
  it('renders with hello world', () => {
    var fooComponent = TestUtils.renderIntoDocument( < Foo / > )
    expect(React.findDOMNode(fooComponent).textContent).toEqual('Hello World')
  })
})
