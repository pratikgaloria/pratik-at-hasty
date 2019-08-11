import { call, put, takeLatest } from 'redux-saga/effects';

import * as sagas from 'app/store/app/sagas';
import * as actions from 'app/store/app/actions';
import * as services from 'app/services/ticker';
import { coin1 as coin } from 'tests/mocks/ticker';

describe('App sagas', () => {
  describe('watchGetTicker', () => {
    it('Should takeLatest GET_TICKER action.', () => {
      const generator = sagas.watchGetTicker();

      expect(generator.next().value).toEqual(
        takeLatest(actions.constants.GET_TICKER, sagas.getTicker),
      );
    });
  });

  describe('getTicker', () => {
    it('Should call getTicker service and put success action.', () => {
      const action = {
        type: actions.constants.GET_TICKER,
        payload: { limit: 10 },
      };
      const generator = sagas.getTicker(action);
      const payload = {
        data: [coin],
      };

      expect(generator.next().value).toEqual(call(services.getTicker, action.payload.limit));

      expect(generator.next(payload).value).toEqual(put(actions.getTickerSuccess(payload)));
    });

    it('Should put failure action if getTicker service fails', () => {
      const action = {
        type: actions.constants.GET_TICKER,
        payload: { limit: 10 },
      };
      const generator = sagas.getTicker(action);

      expect(generator.next().value).toEqual(call(services.getTicker, action.payload.limit));

      if (generator.throw) {
        expect(generator.throw('error').value).toEqual(put(actions.getTickerFailure('error')));
      }
    });
  });

  describe('watchSetLimit', () => {
    it('Should takeLatest SET_LIMIT action.', () => {
      const generator = sagas.watchSetLimit();

      expect(generator.next().value).toEqual(
        takeLatest(actions.constants.SET_LIMIT, sagas.setLimit),
      );
    });
  });

  describe('setLimit', () => {
    it('Should call getTicker saga with appropriate payload.', () => {
      const action = {
        type: actions.constants.SET_LIMIT,
        payload: 10,
      };
      const generator = sagas.setLimit(action);
      const payload = {
        limit: action.payload,
      };

      expect(generator.next().value).toEqual(call(sagas.getTicker, { payload }));
    });
  });
});
