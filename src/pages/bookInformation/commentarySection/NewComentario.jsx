import {useState} from "react";
import DefaultUser from "../../../assets/icons/user-svgrepo-com.svg";
import sendIcon from "../../../assets/icons/send-icon.svg";
export function NewComentario({
  handleSubmit,
  submitLabel,
  userName,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) {
  const [text, setText] = useState(initialText);
  const isTextAreaDisabled = text.length == 0;
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src={DefaultUser} alt="userIcon" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{userName} (Tú)</div>
        </div>
        <form className="comment-form" onSubmit={onSubmit}>
          <textarea
            className="comment-form-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <div className="comment-editing-buttons">
            <button
              className="comment-form-button"
              disabled={isTextAreaDisabled}
            >
              <img src={sendIcon} alt="send" />
            </button>
            {hasCancelButton && (
              <button
                type="button"
                className="comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
