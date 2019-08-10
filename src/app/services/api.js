import axios from 'axios';

export const baseURL = '/api';

export const httpService = axios.create({
  baseURL,
  timeout: 60000,
});

const api = {
  delete: url => httpService
    .delete(url)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  get: (url, payload) => httpService
    .get(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  post: (url, payload) => httpService
    .post(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  put: (url, payload) => httpService
    .put(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
};

export default api;
