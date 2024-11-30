import axios from "./axios";

export const BanUser = (info) => {
  axios.patch(`/user/ban`, info);
};

export const UnbanUser = (info) => {
  axios.patch(`/user/unban`, info);
};
