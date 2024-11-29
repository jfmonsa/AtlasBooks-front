import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/auth/register`, user);

export const loginRequest = (user) => axios.post(`/auth/login`, user);

export const logoutRequest = () => axios.post(`/auth/logout`);

export const verifyTokenRequest = () => axios.post(`/auth/verifyToken`);

export const verifyTokenEmail = (token) =>
  axios.post(`/auth/change-email-confirmed`, token);
