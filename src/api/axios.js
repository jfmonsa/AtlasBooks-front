import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/v1",
  withCredentials: true,
});

export default instance;
