import { AtlasBooksAPIClient } from "@lib/api-client.js";

export const registerRequest = (user) =>
  AtlasBooksAPIClient.post(`/auth/register`, user);

export const loginRequest = (user) =>
  AtlasBooksAPIClient.post(`/auth/login`, user);

export const logoutRequest = () => AtlasBooksAPIClient.post(`/auth/logout`);

export const verifyTokenRequest = () =>
  AtlasBooksAPIClient.post(`/auth/verifyToken`);

export const verifyTokenEmail = (token) =>
  AtlasBooksAPIClient.post(`/auth/change-email-confirmed`, token);
