import {useState} from "react";
import DefaultUser from "../../../assets/img/user-i.png";
import PrimaryBtnForm from "../../../components/buttons/primaryBtn/PrimaryBtnForm";

export function NewComment({
  handleSubmit,
  handleUpdate,
  submitLabel,
  userName,
  hasCancelButton = true,
  initialText = "",
  handleCancel,
  profilepic,
  idbook,
  idcomment,
}) {
  const [text, setText] = useState(initialText);
  const isTextAreaDisabled = text.length == 0;
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit({text: text, bookId: idbook, commentId: idcomment});
    setText("");
  };

  return (
    <div className="comment comment--new">
      <img
        className="comment__image comment__image--i"
        src={`http://localhost:3000/storage/${profilepic}`}
        alt="userIcon"
      />
      <form className="comment__right" onSubmit={onSubmit}>
        <p className="comment__info">
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
    </div>
  );
}
