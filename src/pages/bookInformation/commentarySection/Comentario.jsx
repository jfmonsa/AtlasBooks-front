import {deleteComment, updateComment} from "../../../api";
import {NewComentario} from "./NewComentario";
import DefaultUser from "../../../assets/img/user.png";

// TODO: Revisar pq no salen las funccione de elimar y editar comentario
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
      <img className="comment__image" src={DefaultUser} alt="userIcon" />

      <div className="comment__right">
        <p className="comment__info">
          <span className="comment__author__name">Joselito (Tú)</span>{" "}
          <span className="comment__author__desc">descripcion</span>
          {" - "}
          <span className="comment__author__desc">{createdAt}</span>
        </p>
        {!isEditing && <div className="comment__text">{comment.body}</div>}
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
        <div className="comment__btns">
          {canEdit && (
            <PrimaryBtnForm
              text="Editar"
              onClick={() => setActiveComent({id: comment.id, type: "editing"})}
              cssClasses="baseBtn commentsBtn blueBtn"
            />
          )}
          {canDelete && (
            <PrimaryBtnForm
              text="Eliminar"
              onClick={() => {
                deleteComment(comment.id);
              }}
              cssClasses="baseBtn commentsBtn black2Btn"
            />
          )}
        </div>
      </div>
    </div>
  );
}
