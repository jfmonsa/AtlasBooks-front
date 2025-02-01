import { AtlasBooksAPIClient } from "@lib/api-client.js";

export const BanUser = (info) => {
  AtlasBooksAPIClient.patch(`/user/ban`, info);
};

export const UnbanUser = (info) => {
  AtlasBooksAPIClient.patch(`/user/unban`, info);
};
