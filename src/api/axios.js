import axios from "axios";

const URL = "development";

const BD =
  URL === "Production"
    ? "https://atlas-books-back.vercel.app/api"
    : "http://localhost:3000/api";

const instance = axios.create({
  baseURL: BD,
  withCredentials: true,
});

export default instance;
