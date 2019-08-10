import api from './api';

export const baseURL = 'ticker';

export const getTicker = () => api.get(baseURL);
