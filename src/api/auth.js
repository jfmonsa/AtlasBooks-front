import axios from "./axios";

export const registerRequest = user => axios.post(`/auth/register`, user);
// TODO: Frontend and backend validations don't fully match up yet

export const loginRequest = user => axios.post(`/auth/login`, user);

export const verifyTokenRequest = () => axios.get(`/auth/verifyToken`);

export const verifyTokenEmail = token => axios.post(`/auth/verifyTokenEmail`, token);
// TODO: This endpoint changed to (probably) /auth/change-email-confirmed