import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const registerRequest = (user) => axios.post(`${API_URL}/register`, user);

export const loginRequest = (user) => axios.post(`${API_URL}/login`, user);