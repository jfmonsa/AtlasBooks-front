import {NewComment} from "./NewComment";
import {useAuth} from "../../../contexts/authContext";
import PrimaryBtnForm from "../../../components/buttons/primaryBtn/PrimaryBtnForm";

// TODO: Revisar pq no salen las funccione de elimar y editar comentario
export function Comment({
  id,
  comment,
  userId,
  userName,
  date,
  deleteComment,
  activeComent,
  setActiveComent,
  updateComment,
  profilepic,
}) {
  const {user} = useAuth();
  const userIdLogged = user.id;
  const fiveMinutes = 3000;
  const timePased = new Date() - date > fiveMinutes;
  const canEdit = userIdLogged == userId && !timePased;
  const canDelete = userIdLogged == userId && !timePased;
  const createdAt = date.split("T")[0];
  const isEditing =
    activeComent && activeComent.type == "editing" && activeComent.id == id;
  const submitUpdate = text => {
    updateComment(text, id);
  };

  return (
    <div className="comment">
      <img
        className="comment__image"
        src={`http://localhost:3000/storage/${profilepic}`}
        alt="userIcon"
      />

      <div className="comment__right">
        <p className="comment__info">
          <span className="comment__author__name">{userName}</span>{" "}
          <span className="comment__author__desc"></span>
          {" - "}
          <span className="comment__author__desc">{createdAt}</span>
        </p>
        {!isEditing && <div className="comment__text">{comment}</div>}
        {isEditing && (
          <NewComment
            profilepic={profilepic}
            submitLabel="Actualizar"
            hasCancelButton
            initialText={comment}
            handleSubmit={text => {
              submitUpdate(text);
            }}
            handleCancel={() => setActiveComent(null)}
            userName={userName}
            idcomment={id}
          />
        )}
        <div className="comment__btns">
          {canEdit && (
            <PrimaryBtnForm
              text="Editar"
              onClick={() => setActiveComent({id: id, type: "editing"})}
              cssClasses="baseBtn commentsBtn blueBtn"
            />
          )}
          {canDelete && (
            <PrimaryBtnForm
              text="Eliminar"
              onClick={() => {
                deleteComment(id);
              }}
              cssClasses="baseBtn commentsBtn black2Btn"
            />
          )}
        </div>
      </div>
    </div>
  );
}
