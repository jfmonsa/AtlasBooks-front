import axios from "./axios";

export const createCommentApi = (commentInfo) => axios.post(`/comments`, commentInfo);
export const deleteCommentApi = (commentId) => axios.delete(`/comments/${commentId}`);
export const updateCommentApi = (comment) => axios.put(`/comments/${comment.commentId}`, comment.text);
export const getCommentsApi = (bookId) => axios.get(`/comments/${bookId}`);