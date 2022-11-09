import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("user-token")}`,
  },
});
