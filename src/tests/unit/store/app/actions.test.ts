import * as actions from 'app/store/app/actions';

describe('App actions.', () => {
  it('Should create an action to get Ticker', () => {
    const expectedAction = {
      type: actions.constants.GET_TICKER,
      payload: { limit: 10 },
    };

    expect(actions.getTicker(10)).toEqual(expectedAction);
  });

  it('Should create a success action to get Ticker', () => {
    const payload = {
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
    };

    const expectedAction = {
      type: actions.constants.GET_TICKER_SUCCESS,
      payload,
    }

    expect(actions.getTickerSuccess(payload)).toEqual(expectedAction);
  });

  it('Should create a failure action to get ticker', () => {
    const error = new Error();

    const expectedAction = {
      type: actions.constants.GET_TICKER_FAILURE,
      payload: error,
    }

    expect(actions.getTickerFailure(error)).toEqual(expectedAction);
  });

  it('Should create an action to set Limit', () => {
    const expectedAction = {
      type: actions.constants.SET_LIMIT,
      payload: 10,
    };

    expect(actions.setLimit(10)).toEqual(expectedAction);
  });
});
