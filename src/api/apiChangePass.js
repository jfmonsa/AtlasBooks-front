import axios from "./axios";

export const GetChangePass = passwords => {
  axios.post(`/ChangePass`, passwords);
};
