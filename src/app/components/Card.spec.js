import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Card from './Card';

describe('Card component', () => {
  it('should render default text', () => {
    const card = TestUtils.renderIntoDocument(<Card/>);
    const h4 = TestUtils.findRenderedDOMComponentWithTag(card, 'h4');
    expect(h4.textContent).toEqual('title');
  });
});
