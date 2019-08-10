import { all } from 'redux-saga/effects';

import { watchGetTicker } from './app/sagas';

function* rootSaga() {
  yield all([
    watchGetTicker(),
  ]);
}

export default rootSaga;
