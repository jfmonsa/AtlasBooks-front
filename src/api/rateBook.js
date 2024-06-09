import axios from "./axios";

export const rateBookApi = (rateInfo) => axios.post(`/rateBook`, rateInfo);