import {NewComment} from "./NewComment";
import {useAuth} from "../../../hooks/useAuth.js";
import PrimaryBtnForm from "../../../components/buttons/primaryBtn/PrimaryBtnForm";

// TODO: Revisar pq no salen las funccione de elimar y editar comentario
export function Comment({
  commentId,
  comment,
  userId,
  userName,
  date,
  deleteComment,
  activeComent,
  setActiveComent,
  updateComment,
}) {
  const {user} = useAuth();
  const userIdLogged = user.data.user.id;
  const fiveMinutes = 3000;
  const timePased = new Date() - date > fiveMinutes;
  const canEdit = (userIdLogged == userId) && !timePased;
  const canDelete = userIdLogged == userId && !timePased;
  const createdAt = user.date ? user.date.split("T")[0] : [];
  const isEditing =
    activeComent && activeComent.type == "editing" && activeComent.id == commentId;
   
  const submitUpdate = text => {
    updateComment(text, commentId);
    
  };
  return (
  
    <div className="comment">
      <img
        className="comment__image"
        src={
          user.data.user.profileImgPath
            ? user.data.user.profileImgPath
            : "../storage/usersProfilePic/default.webp"
        }
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
            profilepic={user.data.user.profileImgPath}
            submitLabel="Actualizar"
            hasCancelButton
            initialText={comment}
            handleSubmit={text => {
              submitUpdate(text.text, commentId);
            }}
            handleCancel={() => setActiveComent(null)}
            userName={userName}
            idcomment={commentId}
          />
        )}
        <div className="comment__btns">
          {canEdit && (
            <PrimaryBtnForm
              text="Editar"
              onClick={() => setActiveComent({id: commentId, type: "editing"})}
              cssClasses="baseBtn commentsBtn blueBtn"
            />
          )}
          {canDelete && (
            <PrimaryBtnForm
              text="Eliminar"
              onClick={() => {
                deleteComment(commentId);
                console.log("deleteComment", commentId);
              }}
              cssClasses="baseBtn commentsBtn black2Btn"
            />
          )}
        </div>
      </div>
    </div>
  );
}
