import axios from "./axios";

export const getBannedUser = (info) => {
  axios.post(`/user/ban`, info);
};
