import { AtlasBooksAPIClient } from "@lib/api-client.js";

export const verifyEmail = (email) =>
  AtlasBooksAPIClient.post(`/auth/forgot-password`, email);
export const createRecoveryAccount = (body) =>
  AtlasBooksAPIClient.post(`/auth/forgot-password-email-confirmed`, body);
