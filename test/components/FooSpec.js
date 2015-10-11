import Foo from '../../src/components/Foo.jsx'
import React from 'react/addons'

const TestUtils = React.addons.TestUtils

fdescribe('Foo', () => {
  it('renders with hello world', (done) => {
    TestUtils.renderIntoDocument( < Foo / > )
      .then(({output}) => {
        const fooDiv = TestUtils.findRenderedDOMComponentWithClass(output, 'foo')
        expect(fooDiv).toBeDefined()
        expect(5).toEqual(5)
      });
  })
})
