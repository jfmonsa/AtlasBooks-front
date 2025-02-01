import axios from "axios";

/** http client for atlas books backend */
export const AtlasBooksAPIClient = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    "https://atlasbooks-back.onrender.com/api/v1",
  withCredentials: true,
});

// NOTE: Facade pattern implemented to make third party libraries easy to replace
//       and modify without altering existing code that depens on this libraries
