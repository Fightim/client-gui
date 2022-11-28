import axios from "axios";

const LOCAL_STORAGE_KEY = "user-token";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`,
  },
});
