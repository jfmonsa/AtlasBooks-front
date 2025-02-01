import { AtlasBooksAPIClient } from "@lib/api-client.js";

/** Backend request for reporting inadequate content */
export async function createBookReport(bookId, motivation) {
  AtlasBooksAPIClient.post(`/reports`, { bookId, motivation });
}
