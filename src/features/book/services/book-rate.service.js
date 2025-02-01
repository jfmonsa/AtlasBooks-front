import { AtlasBooksAPIClient } from "@lib/api-client.js";

export function getBookRateByUser(bookId, userId) {
  const response = AtlasBooksAPIClient.get(
    `/book/rate/${userId ? `?userId=${userId}&idBook=${bookId}` : `?idBook=${bookId}`}`,
  );
  const rate = response.data.data.rate;
  return rate;
}

export function rateBook(rateValue, bookId) {
  AtlasBooksAPIClient.post(`/book/rate`, { rate: rateValue, idBook: bookId });
}
