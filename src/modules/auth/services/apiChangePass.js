import axios from "@config/axios-instance.js";

export const GetChangePass = (passwords) => {
  axios.post(`/auth/change-password`, passwords);
};
