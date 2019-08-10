import api from './api';

export const baseURL = 'ticker';

export const getTicker = limit => api.get(baseURL, {
  params: {
    limit,
  },
});
