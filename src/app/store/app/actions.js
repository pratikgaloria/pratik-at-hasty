export const constants = {
  GET_TICKER: '[APP] GET_TICKER',
  GET_TICKER_SUCCESS: '[APP] GET_TICKER_SUCCESS',
  GET_TICKER_FAILURE: '[APP] GET_TICKER_FAILURE',

  SET_LIMIT: '[APP] SET_LIMIT',
};

export const setLimit = limit => ({
  type: constants.SET_LIMIT,
  payload: limit,
});

export const getTicker = limit => ({
  type: constants.GET_TICKER,
  payload: { limit },
});

export const getTickerSuccess = payload => ({
  type: constants.GET_TICKER_SUCCESS,
  payload,
});

export const getTickerFailure = error => ({
  type: constants.GET_TICKER_FAILURE,
  payload: error,
});
