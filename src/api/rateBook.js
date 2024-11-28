import axios from "./axios";

export const rateBookApi = rateInfo => axios.post(`/book/rate`, rateInfo);
export const getBookRatingApi = (bookId, userId) =>
  axios.get(
    `/book/rate/${userId ? `?userId=${userId}&idBook=${bookId}` : `?idBook=${bookId}`}`,
  );
