import axios from "axios";

export class HttpClient {
  apiRoot;

  constructor(apiRoot) {
    this.apiRoot = apiRoot;
  }

  get(route, config) {
    const promise = axios.get(this.apiRoute(route), config);
    return dispatchRequest(promise);
  }

  delete(route, config) {
    const promise = axios.delete(this.apiRoute(route), config);
    return dispatchRequest(promise);
  }

  head(route, config) {
    const promise = axios.head(this.apiRoute(route), config);
    return dispatchRequest(promise);
  }

  options(route, config) {
    const promise = axios.options(this.apiRoute(route), config);
    return dispatchRequest(promise);
  }

  post(route, data, config) {
    const promise = axios.post(this.apiRoute(route), data, config);
    return dispatchRequest(promise);
  }

  put(route, data, config) {
    const promise = axios.put(this.apiRoute(route), data, config);
    return dispatchRequest(promise);
  }

  patch(route, data, config) {
    const promise = axios.patch(this.apiRoute(route), data, config);
    return dispatchRequest(promise);
  }

  setCommonHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  }

  deleteCommonHeader(key) {
    delete axios.defaults.headers.common[key];
  }

  apiRoute(route) {
    return `${this.apiRoot}${route}`;
  }
}

const dispatchRequest = async (promise) => {
  try {
    const response = await promise;
    return parseResponse(response);
  } catch (e) {
    const response = parseResponse(e.response);
    return Promise.reject(createError(e.message, response));
  }
};

const parseResponse = (response) => {
  return {
    data: response.data,
    status: response.status,
  };
};

const createError = (message, response) => {
  const error = new Error(message);
  return enhanceError(error, response);
};

const enhanceError = (error, response) => {
  error.response = response;
  error.isApiError = true;
  return error;
};
