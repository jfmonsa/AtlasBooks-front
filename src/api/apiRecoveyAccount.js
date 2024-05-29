import axios from "./axios";

export const verifyEmail = (email) => axios.post(`/verifyEmail`, email);
export const createRecoveryAccount = (body) => axios.post(`/createNewPass`, body);