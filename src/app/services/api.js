import axios from 'axios';

export const baseURL = '/api';

export const httpService = axios.create({
  baseURL,
  timeout: 60000,
});

const api = {
  get: (url, payload) => httpService
    .get(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
};

export default api;
