import * as selectors from 'app/store/app/selectors';

describe('App selectors.', () => {
  it('getTickerData returns valid object from the state', () => {
    const state = {
      app: {
        data: [
          {
            id: 1,
            cmc_rank: 1,
            name: 'Bitcoin',
            quote: {
              USD: {
                price: 11379.82,
                market_cap: 203352417289.25,
              },
            },
          },
        ],
      },
    };

    const actualObject = selectors.getTickerData(state);
    const expectedObject = [{
      id: 1,
      cmc_rank: 1,
      name: 'Bitcoin',
      quote: {
        USD: {
          price: 11379.82,
          market_cap: 203352417289.25,
        },
      },
    }];

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
