import axios from "./axios";

export const GetChangeEmail = (email) => {
  axios.post(`/auth/change-email`, email);
};

export const GetChangeEmailToken = (token) => {
  axios.post(`/auth/change-email-confirmed`, token);
};
