import axios from "./axios";

export const GetChangePass = (
  currentPassword,
  newPassword,
  confirmPassword,
) => {
  axios.post(`/ChangePass`, currentPassword, newPassword, confirmPassword);
};
