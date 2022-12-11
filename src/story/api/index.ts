import axios, { AxiosRequestConfig } from "axios";

const LOCAL_STORAGE_KEY = "user-token";

const getAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ? `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}` : "";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`,
  // },
});

client.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const accessToken = getAccessToken();
    if (accessToken && config.headers) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  // TODO :: request ERROR 처리
  // function (error) {
  // }
)