import axios from "axios";
import { LOCAL_STORAGE_KEY } from "./user";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`,
  },
});
