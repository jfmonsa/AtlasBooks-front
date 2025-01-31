import axios from "@config/axios-instance.js";

export async function getFilePublicUrl(bookId, fileName) {
  const response = await axios.post("/book/download", {
    bookId,
    fileName,
  });
  const urlFile = response.data.data.fileCloudUrl;
  return urlFile;
}
