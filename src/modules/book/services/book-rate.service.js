import axios from "@config/axios-instance.js";

export function getBookRateByUser(bookId, userId) {
  const response = axios.get(
    `/book/rate/${userId ? `?userId=${userId}&idBook=${bookId}` : `?idBook=${bookId}`}`,
  );
  const rate = response.data.data.rate;
  return rate;
}

export function rateBook(rateValue, bookId) {
  axios.post(`/book/rate`, { rate: rateValue, idBook: bookId });
}
