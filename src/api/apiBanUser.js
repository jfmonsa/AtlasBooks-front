import axios from "./axios";

export const getBannedUser = info => {
  axios.post(`/bans`, info);
};
