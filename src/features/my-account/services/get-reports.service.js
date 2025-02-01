import { AtlasBooksAPIClient } from "@lib/api-client.js";

/** Get community reports of books  */
export async function getReports() {
  const response = await AtlasBooksAPIClient.get(`/reports/all`);
  return response.data.data;
}
