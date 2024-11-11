import "./comments.css";
import {Comment} from "./Comment.jsx";
import {NewComment} from "./NewComment.jsx";
//api and logic
import {useEffect, useState} from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../../api/apiComments.js";

import {useAuth} from "../../../hooks/useAuth.js";

const Comments = ({comments, bookId}) => {
  const [activeComent, setActiveComent] = useState(null);
  const {user} = useAuth();
  const [backendComents, setBackendComents] = useState([]);
  const [loading, setLoading] = useState(false);

  const addComent = async body => {
    setLoading(true);
    try {
      const comment = await createCommentApi(body);
      if (comment.length == 0) {
        throw new Error("Error al crear el comentario");
      }
      setBackendComents([comment.data, ...backendComents]);
      setActiveComent(null);
    } catch (error) {
      error.message;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCommentsApi(bookId);
    setBackendComents(comments);
  }, [bookId, comments]);

  const deleteComment = commentId => {
    if (window.confirm("Estas seguro de querer eliminar este comentario?")) {
      deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComents.filter(
          backendComent => backendComent.idcoment != commentId,
        );
        setBackendComents(updateBackendComments);
      });
    }
  };

  const updateComment = async (text, commentId) => {
    setLoading(true);
    try {
      const updatedComment = await updateCommentApi({text, commentId});
      if (updatedComment.length == 0) {
        throw new Error("Error al actualizar el comentario");
      }
      const updateBackendComments = backendComents.map(backendComent =>
        backendComent.idcoment == commentId
          ? {...backendComent, text: updatedComment.data.text}
          : backendComent,
      );
      setBackendComents(updateBackendComments);
      setActiveComent(null);
    } catch (error) {
      error.message;
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NewComment
        submitLabel="Comentar"
        handleSubmit={addComent}
        userName={user.nickname}
        idbook={bookId}
        profilepic={
          user.data.user.profileImgPath
            ? user.data.user.profileImgPath
            : "../storage/usersProfilePic/default.webp"
        }
      />
      <h2 className="card__h1">Otros Comentarios</h2>
      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <div className="comments-container">
          {Array.isArray(backendComents) && backendComents.length > 0 ? (
            backendComents.map(rootComment => (
              <Comment
                key={rootComment.id}
                comment={rootComment.textCommented}
                userId={rootComment.idUser}
                userName={rootComment.nickname}
                date={rootComment.date}
                deleteComment={deleteComment}
                activeComent={activeComent}
                updateComment={updateComment}
                setActiveComent={setActiveComent}
                profilepic={
                  rootComment.profileImgPath
                    ? rootComment.profileImgPath
                    : "../storage/usersProfilePic/default.webp"
                }
              />
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      )}
    </>
  );
};
export default Comments;
