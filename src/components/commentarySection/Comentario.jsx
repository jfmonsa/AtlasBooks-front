import {deleteComment, updateComment} from "../../api";
import {NewComentario} from "./NewComentario";

export function Comentario({
  comment,
  key,
  userId,
  deleteComment,
  activeComent,
  setActiveComent,
  updateComment,
}) {
  const fiveMinutes = 3000;
  const timePased = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canEdit = userId == comment.userId && !timePased;
  const canDelete = userId == comment.userId && !timePased;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isEditing =
    activeComent &&
    activeComent.type == "editing" &&
    activeComent.id == comment.id;
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="../../assets/icons/user-svgrepo-com.svg" alt="userIcon" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-date">{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <NewComentario
            submitLabel="Actualizar"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={text => updateComment(text, comment.id)}
            handleCancel={() => setActiveComent(null)}
            userName={comment.username}
          />
        )}
        <div className="comment-actions">
          {canEdit && (
            <div
              className="comment-action"
              onClick={() => setActiveComent({id: comment.id, type: "editing"})}
            >
              Editar
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              Eliminar{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
