import { AtlasBooksAPIClient } from "@lib/api-client.js";

export const GetChangePass = (passwords) => {
  AtlasBooksAPIClient.post(`/auth/change-password`, passwords);
};
