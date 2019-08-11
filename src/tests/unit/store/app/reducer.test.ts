import reducer, { initialState } from 'app/store/app/reducer';
import * as actions from 'app/store/app/actions';

describe('App reducer.', () => {
  it('Should create the initial state.', () => {
    const state = reducer(undefined, { type: 'UNKNOWN_ACTION' });
    const expectedState = initialState;

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for GET_TICKER action.', () => {
    const state = reducer(initialState, {
      type: actions.constants.GET_TICKER,
      payload: {
        limit: 10,
      },
    });

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for GET_TICKER_SUCCESS action.', () => {
    const state = reducer(
      {
        ...initialState,
        isLoading: true,
        error: 'Error while loading data!',
      },
      {
        type: actions.constants.GET_TICKER_SUCCESS,
        payload: {
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
      },
    );

    const expectedState = {
      ...initialState,
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
      isLoading: false,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for GET_TICKER_FAILURE action.', () => {
    const error = new Error();

    const state = reducer(
      {
        ...initialState,
        isLoading: true,
      },
      {
        type: actions.constants.GET_TICKER_FAILURE,
        payload: error,
      },
    );

    const expectedState = {
      ...initialState,
      isLoading: false,
      error,
    };

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for SET_LIMIT action.', () => {
    const state = reducer(initialState, {
      type: actions.constants.SET_LIMIT,
      payload: 10,
    });

    const expectedState = {
      ...initialState,
      limit: 10,
    };

    expect(state).toEqual(expectedState);
  });
});
