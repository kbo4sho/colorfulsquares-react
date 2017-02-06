import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('colorfulSquares actions', () => {
  it('setRoute should create SET_ROUTE action', () => {
    expect(actions.setRoute('/')).toEqual({
      type: types.SET_ROUTE,
      route: "/"
    });
  });
});


//TODO add more tests