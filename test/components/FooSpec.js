import Foo from '../../src/components/Foo.jsx'
import React from 'react/addons'

const TestUtils = React.addons.TestUtils

fdescribe('Foo', () => {
  it('renders with hello world', () => {
    var fooComponent = TestUtils.renderIntoDocument( < Foo / > )
    expect(React.findDOMNode(fooComponent).textContent).toEqual('Hello World')
  })
})
