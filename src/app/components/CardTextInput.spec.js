import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CardTextInput from './cardTextInput';

describe('CardTextInput component', () => {
  it('should render default text', () => {
    const cardTextInput = TestUtils.renderIntoDocument(<CardTextInput/>);
    const textarea = TestUtils.findRenderedDOMComponentWithTag(cardTextInput, 'textarea');
    expect(textarea.value).toEqual('textarea');
  });
});
