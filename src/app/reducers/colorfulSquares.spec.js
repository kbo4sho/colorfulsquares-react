import colorfulSquares from './colorfulSquares';

describe('colorfulSquares reducer', () => {
      it('should handle initial state', () => {
            expect(
            colorfulSquares(undefined, {})
            ).toEqual(
            {
                selectedItem: {},
                isFetching: false,
                didInvalidate: false,
                items: [],
                lastUpdated: "",
                route: "/"
            }
            );
        });

});