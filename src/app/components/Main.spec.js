import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from './Main';
import Grid from './Grid';

function setup(propOverrides) {
  const props = Object.assign({
    items: [
     { "url": "http://lorempixel.com/40/40/", "id": 0 }, 
     { "url": "http://lorempixel.com/40/40/", "id": 1 }
    ],
    actions: {
      setSelectedItem: jasmine.createSpy(),
      setRoute: jasmine.createSpy()
    }
  }, propOverrides);

   const renderer = TestUtils.createRenderer();
  renderer.render(<Main {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Main component', () => {
  it('should render grid', () => {
    const {output} = setup();
     const [,grid,] = output.props.children;
      expect(grid.type).toBe(Grid);
  });

  //TODO add more tests
});
