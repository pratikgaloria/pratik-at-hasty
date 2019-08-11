import reducer, { initialState } from 'app/store/app/reducer';
import * as actions from 'app/store/app/actions';
import { coin1 as coin } from 'tests/mocks/ticker';

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
          data: [coin],
        },
      },
    );

    const expectedState = {
      ...initialState,
      data: [coin],
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
