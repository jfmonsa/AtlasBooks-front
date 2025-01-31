import axios from "@config/axios-instance.js";

export const verifyEmail = (email) =>
  axios.post(`/auth/forgot-password`, email);
export const createRecoveryAccount = (body) =>
  axios.post(`/auth/forgot-password-email-confirmed`, body);
