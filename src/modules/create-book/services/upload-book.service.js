import axios from "@config/axios-instance.js";

/**
 * Uploads a book with the given data.
 *
 * @param {Object} bookData - The data of the book to upload.
 * @param {File} bookFile - The file of the book to upload.
 * @param {File} coverImage - The cover image of the book to upload.
 * @returns {Promise} The response from the server.
 */
export async function createBook(bookData, bookFiles, bookCoverImage) {
  const formData = new FormData();

  // Append the book data to the FormData
  Object.entries(bookData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => formData.append(`${key}[]`, val));
    } else {
      formData.append(key, value);
    }
  });

  // Append the book files to the FormData
  bookFiles.forEach((file) => {
    formData.append("bookFiles", file);
  });

  formData.append("cover", bookCoverImage);

  const response = axios.post("/book", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
