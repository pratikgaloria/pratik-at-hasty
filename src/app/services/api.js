import axios from 'axios';

export const baseURL = '/api';

export const httpService = axios.create({
  baseURL,
  timeout: 60000,
});

const api = {
  delete: (url: string): Promise<any> => httpService
    .delete(url)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  get: (url: string): Promise<any> => httpService
    .get(url)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  post: (url: string, payload: any): Promise<any> => httpService
    .post(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
  put: (url: string, payload: any): Promise<any> => httpService
    .put(url, payload)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    }),
};

export default api;
