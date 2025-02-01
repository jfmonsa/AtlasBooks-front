import { AtlasBooksAPIClient } from "@lib/api-client.js";

export const GetChangeEmail = (email) => {
  AtlasBooksAPIClient.post(`/auth/change-email`, email);
};

export const GetChangeEmailToken = (token) => {
  AtlasBooksAPIClient.post(`/auth/change-email-confirmed`, token);
};
