import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth.js";

import "./BookComments.css";
import { Comment } from "../Comment.jsx";
import { NewComment } from "../NewComment.jsx";
import { Card } from "@/components/Card/Card.jsx";

import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../../services/book-comments.service.js";

export function BookComments({ comments, bookId }) {
  const [activeComent, setActiveComent] = useState(null);
  const { user } = useAuth();
  const [backendComents, setBackendComents] = useState([]);
  const [loading, setLoading] = useState(false);

  /* fecht comments */
  useEffect(() => {
    getComments(bookId).then((comments) => {
      setBackendComents(comments);
    });
  }, [bookId, comments]);

  const handleCreateComment = async (text, bookId, commentId) => {
    if (text.length == 0) return;

    setLoading(true);
    try {
      const comment = await createComment(text, bookId, commentId);

      setBackendComents([comment, ...backendComents]);
      setActiveComent(null);
    } catch {
      alert("Error al crear el comentario");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("Estas seguro de querer eliminar este comentario?")) {
      return;
    }
    try {
      await deleteComment(commentId);
      const updateBackendComments = backendComents.filter(
        (backendComent) => backendComent.id != commentId,
      );
      setBackendComents(updateBackendComments);
    } catch {
      alert("Error al eliminar el comentario");
    }
  };

  const handleUpdateComment = async (text, commentId) => {
    if (text.length == 0) return;
    setLoading(true);

    try {
      const updatedComment = await updateComment(text, commentId);
      const updateBackendComments = backendComents.map((backendComent) =>
        backendComent.id == commentId
          ? {
              ...backendComent,
              textCommented: updatedComment.textCommented,
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
    <Card h1Text="Comentarios" id="comments" notFullWidth>
      {user ? (
        <NewComment
          submitLabel="Comentar"
          handleSubmit={handleCreateComment}
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
          {backendComents.length > 0 ? (
            backendComents.map((rootComment) => (
              <Comment
                key={rootComment.id}
                commentId={rootComment.id}
                comment={rootComment.textCommented}
                userId={rootComment.idUser}
                userName={rootComment.nickname}
                date={rootComment.dateCommented}
                deleteComment={handleDeleteComment}
                activeComent={activeComent}
                updateComment={handleUpdateComment}
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
