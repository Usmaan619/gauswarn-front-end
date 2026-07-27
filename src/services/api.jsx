import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "";

//  Common headers configuration
const getHeaders = (contentType = "application/json") => ({
  "ngrok-skip-browser-warning": "true",
  "Content-Type": contentType,
});

//  Base request config factory
const createRequestConfig = (method, url, data = null, extraHeaders = {}) => ({
  method,
  url,
  data,
  headers: {
    ...getHeaders(),
    ...extraHeaders,
  },
  timeout: 10000, // 10s timeout
});

// 🔹 Generic HTTP request handler
const makeRequest = async (config) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // Enhanced error handling
    const errorData = error.response?.data || error.message || "Network error";
    throw {
      message: errorData.message || errorData,
      status: error.response?.status || 500,
      details: errorData,
    };
  }
};

// 🔸 CRUD Operations (Dynamic Endpoints)
export const getData = (endpoint) =>
  makeRequest(createRequestConfig("GET", `${API_BASE_URL}/${endpoint}`));

export const postData = (endpoint, data) =>
  makeRequest(createRequestConfig("POST", `${API_BASE_URL}${endpoint}`, data));

export const postFormData = (endpoint, formData) =>
  makeRequest(
    createRequestConfig("POST", `${API_BASE_URL}${endpoint}`, formData, {
      "Content-Type": "multipart/form-data",
    })
  );

export const updateData = (endpoint, id, data) =>
  makeRequest(
    createRequestConfig("PUT", `${API_BASE_URL}/${endpoint}/${id}`, data)
  );

export const deleteData = (endpoint, id) =>
  makeRequest(
    createRequestConfig("DELETE", `${API_BASE_URL}/${endpoint}/${id}`)
  );

// 🔸 Specialized DELETE variants
export const deleteDataReel = (endpoint) =>
  makeRequest(createRequestConfig("DELETE", `${API_BASE_URL}${endpoint}`));

export const deleteDataNew = (url) =>
  makeRequest(createRequestConfig("DELETE", `${API_BASE_URL}${url}`));

// 🔹 Authenticated requests (Future-proof)
export const getDataAuth = (endpoint, token) =>
  makeRequest(
    createRequestConfig("GET", `${API_BASE_URL}/${endpoint}`, null, {
      Authorization: `Bearer ${token}`,
    })
  );

export const postDataAuth = (endpoint, data, token) =>
  makeRequest(
    createRequestConfig("POST", `${API_BASE_URL}${endpoint}`, data, {
      Authorization: `Bearer ${token}`,
    })
  );

// 🔹 Request interceptor setup (Optional - for global config)
export const setupAxiosInterceptors = (onError = null) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config.headers,
        ...getHeaders(config.headers["Content-Type"]),
      };
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    onError || ((error) => Promise.reject(error))
  );
};

// 🔹 Batch operations
export const batchRequests = async (requests) => {
  const results = await Promise.allSettled(requests);
  return results.map((result, index) => ({
    index,
    success: result.status === "fulfilled",
    data: result.status === "fulfilled" ? result.value : null,
    error: result.status === "rejected" ? result.reason : null,
  }));
};
