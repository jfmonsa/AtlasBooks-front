import axios from "@config/axios-instance.js";

/** Get community reports of books  */
export async function getReports() {
  const response = await axios.get(`/reports/all`);
  return response.data.data;
}
