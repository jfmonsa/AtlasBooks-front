import axios from "./axios";

export const GetChangeEmail = email => {
  axios.post(`/ChangeEmail`, email);
};
