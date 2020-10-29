import axios from 'axios';

const BACKEND_URL = `https://5.react.pages.academy/guess-melody`;
const TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
