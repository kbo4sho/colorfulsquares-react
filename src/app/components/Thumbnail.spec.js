import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Thumbnail from './thumbnail';

describe('Thumbnail component', () => {
  it('should render default text', () => {
    const thumbnail = TestUtils.renderIntoDocument(<Thumbnail/>);
    const img = TestUtils.findRenderedDOMComponentWithTag(thumbnail, 'img');
    expect(img.src).toEqual('http://lorempixel.com/40/40');
  });
});
