import { AtlasBooksAPIClient } from "@lib/api-client.js";

export async function getFilePublicUrl(bookId, fileName) {
  const response = await AtlasBooksAPIClient.post("/book/download", {
    bookId,
    fileName,
  });
  const urlFile = response.data.data.fileCloudUrl;
  return urlFile;
}
