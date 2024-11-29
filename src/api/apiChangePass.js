import axios from "./axios";

export const GetChangePass = (passwords) => {
  axios.post(`/auth/change-password`, passwords);
};
