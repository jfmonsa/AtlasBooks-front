import axios from "@config/axios-instance.js";

/** Backend request for reporting inadequate content */
export async function createBookReport(bookId, motivation) {
  axios.post(`/reports`, { bookId, motivation });
}
