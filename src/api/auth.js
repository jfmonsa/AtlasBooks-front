import axios from "./axios";

export const registerRequest = user => axios.post(`/register`, user);

export const loginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verifyToken`);

export const verifyTokenEmail = token => axios.post(`/verifyTokenEmail`, token);

