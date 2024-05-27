import axios from "./axios";

export const GetChangeEmail = email => {
  axios.post(`/ChangeEmailSend`, email);
};

export const GetChangeEmailToken = token => {
  axios.post(`/ChangeEmailReceived`, token);
};
