import axios from "./axios";

export const registerRequest = user => axios.post(`/auth/register`, user);
// TODO: Frontend and backend validations don't fully match up yet

export const loginRequest = user => axios.post(`/auth/login`, user);

export const logoutRequest = () => axios.post(`/auth/logout`);

export const verifyTokenRequest = () => axios.post(`/auth/verifyToken`);

export const verifyTokenEmail = token => axios.post(`/auth/change-email-confirmed`, token);