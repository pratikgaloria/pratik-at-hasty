import { call, put, takeLatest } from 'redux-saga/effects';

import * as services from 'app/services/ticker';
import * as actions from './actions';

export function* getTicker() {
  try {
    const payload = yield call(services.getTicker);
    yield put(actions.getTickerSuccess(payload));
  } catch (error) {
    yield put(actions.getTickerFailure(error));
  }
}

export function* watchGetTicker() {
  yield takeLatest(actions.constants.GET_TICKER, getTicker);
}
