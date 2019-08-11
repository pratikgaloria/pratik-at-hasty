import * as selectors from 'app/store/app/selectors';
import { coin1 as coin } from 'tests/mocks/ticker';

describe('App selectors.', () => {
  it('getTickerData returns valid object from the state', () => {
    const state = {
      app: {
        data: [coin],
      },
    };

    const actualObject = selectors.getTickerData(state);
    const expectedObject = [coin];

    expect(actualObject).toEqual(expectedObject);
  });

  it('getLimit returns valid object from the state', () => {
    const state = {
      app: {
        limit: 10,
      },
    };

    const actualObject = selectors.getLimit(state);
    const expectedObject = 10;

    expect(actualObject).toEqual(expectedObject);
  });
});
