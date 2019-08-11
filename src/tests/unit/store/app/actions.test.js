import * as actions from 'app/store/app/actions';
import { coin1 as coin } from 'tests/mocks/ticker';

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
      data: [coin],
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
