import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    "https://atlasbooks-back.onrender.com/api/v1",
  withCredentials: true,
});

export default instance;
