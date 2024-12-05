import "./comments.css";
import { Comment } from "./Comment.jsx";
import { NewComment } from "./NewComment.jsx";
import Card from "../../../../components/card/Card.jsx";
//api and logic
import { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../../../api/apiComments.js";

import { useAuth } from "../../../../hooks/useAuth.js";

export function BookComments({ comments, bookId }) {
  const [activeComent, setActiveComent] = useState(null);
  const { user } = useAuth();
  const [backendComents, setBackendComents] = useState([]);
  const [loading, setLoading] = useState(false);

  const addComent = async (body) => {
    setLoading(true);
    try {
      const comment = await createCommentApi(body);
      if (comment.length == 0) {
        throw new Error("Error al crear el comentario");
      }
      setBackendComents([comment.data.data[0], ...backendComents]);
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

  const deleteComment = async (commentId) => {
    if (window.confirm("Estas seguro de querer eliminar este comentario?")) {
      await deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComents.filter(
          (backendComent) => backendComent.id != commentId,
        );
        setBackendComents(updateBackendComments);
      });
    }
  };

  const updateComment = async (text, commentId) => {
    setLoading(true);
    try {
      const updatedComment = await updateCommentApi({ text, commentId });
      if (updatedComment.length == 0) {
        throw new Error("Error al actualizar el comentario");
      }
      const updateBackendComments = backendComents.map((backendComent) =>
        backendComent.id == commentId
          ? {
              ...backendComent,
              textCommented: updatedComment.data.data.textCommented,
            }
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
    <Card h1Text="Comentarios" id="comments">
      {user ? (
        <NewComment
          submitLabel="Comentar"
          handleSubmit={addComent}
          userName={user.nickname}
          idbook={bookId}
          profilepic={
            user.profileImgPath
              ? user.profileImgPath
              : "https://res.cloudinary.com/dlja4vnrd/image/upload/v1730346383/default_f2wovz.png"
          }
        />
      ) : (
        <p> Debes estar logueado para poder comentar </p>
      )}
      <h2 className="card__h1">Otros Comentarios</h2>
      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <div className="comments-container">
          {Array.isArray(backendComents) && backendComents.length > 0 ? (
            backendComents.map((rootComment) => (
              <Comment
                key={rootComment.id}
                commentId={rootComment.id}
                comment={rootComment.textCommented}
                userId={rootComment.idUser}
                userName={rootComment.nickname}
                date={rootComment.dateCommented}
                deleteComment={deleteComment}
                activeComent={activeComent}
                updateComment={updateComment}
                setActiveComent={setActiveComent}
                profilepic={
                  rootComment.profileImgPath
                    ? rootComment.profileImgPath
                    : "https://res.cloudinary.com/dlja4vnrd/image/upload/v1730346383/default_f2wovz.png"
                }
              />
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      )}
    </Card>
  );
}
