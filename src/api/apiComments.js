import {
  getCommentsApi,
  createCommentApi,
  updateCommentApi,
  deleteCommentApi,
} from "./comments";

export const getComments = async id => {
  try {
    const comments = await getCommentsApi(id);
    return comments;
  } catch (error) {
    return error.message;
  }
};

export const createComment = async body => {
  try {
    const comment = await createCommentApi(body);
    return comment;
  } catch (error) {
    return error.message;
  }
};

export const updateComment = async comment => {
  try {
    console.log(
      "Sending request to /api/comments/ to update:",
      comment.text,
      comment.commentId,
    );
    const updateComment = await updateCommentApi(comment);
    console.log("Response received:", updateComment);
    return updateComment;
  } catch (error) {
    return error.message;
  }
};

export const deleteComment = async id => {
  try {
    await deleteCommentApi(id);
  } catch (error) {}
};
