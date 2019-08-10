import { all } from 'redux-saga/effects';

import { watchGetTicker, watchSetLimit } from './app/sagas';

function* rootSaga() {
  yield all([
    watchGetTicker(),
    watchSetLimit(),
  ]);
}

export default rootSaga;
