import * as actions from './actions';

const initialState = {
  limit: 100,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
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
