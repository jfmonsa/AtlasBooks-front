import axios from "./axios";

export const rateBookApi = (rateInfo) => axios.post(`/rateBook`, rateInfo);
export const getBookRatingApi = (bookId) => axios.get(`/rateBook/${bookId}`);