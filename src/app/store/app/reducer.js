import * as actions from './actions';

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
  limit: 10,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actions.constants.GET_TICKER:
      return {
        ...state,
        isLoading: true,
      };
    case actions.constants.GET_TICKER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actions.constants.GET_TICKER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case actions.constants.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
