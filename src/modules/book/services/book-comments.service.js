import axios from "@config/axios-instance";

export async function getComments(bookId) {
  const response = await axios.get(`/book-comments/${bookId}`);
  return Array.isArray(response) ? response : [];
}

export async function createComment(text, bookId, commentId) {
  const response = await axios.post(`/book-comments`, {
    text: text,
    bookId: bookId,
    commentId: commentId,
  });
  const comment = response.data.data[0];
  return comment;
}

export async function deleteComment(commentId) {
  return await axios.delete(`/book-comments/${commentId}`);
}

export async function updateComment(text, commentId) {
  const response = await axios.put("/book-comments", { text, commentId });
  return response.data.data;
}
