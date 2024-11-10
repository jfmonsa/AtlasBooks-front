import axios from "./axios";

export const createCommentApi = (commentInfo) => axios.post(`/book-comments`, commentInfo);
export const deleteCommentApi = (commentId) => axios.delete(`/book-comments/${commentId}`);
export const updateCommentApi = (comment) => axios.put(`/book-comments/${comment.commentId}`, comment.text);
export const getCommentsApi = (bookId) => axios.get(`/book-comments/${bookId}`);