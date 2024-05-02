import {deleteComment, updateComment} from "../../../api";
import {NewComentario} from "./NewComentario";
import DefaultUser from "../../../assets/img/user.png";

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

  /*
  
  <div className="comment comment--new">
      <img className="comment__image--i" src={DefaultUser} alt="userIcon" />
      <form className="comment__right" onSubmit={onSubmit}>
        <p className="comment__author">
          <span className="comment__author__name">{userName} (Tú)</span>{" "}
          <span className="comment__author__desc">descripcion</span>
        </p>
        <textarea
          placeholder="Escribe un comentario..."
          className="comment__textarea"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <div className="comment__btns">
          <PrimaryBtnForm
            text="Comentar"
            cssClasses="baseBtn commentsBtn blueBtn"
            disabled={isTextAreaDisabled}
          />
          {hasCancelButton && (
            <PrimaryBtnForm
              text="Cancelar"
              onClick={handleCancel}
              cssClasses="baseBtn commentsBtn black2Btn"
            />
          )}
        </div>
      </form>
    </div>*/
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
