import "./Comentarios.css";
import {Comentario} from "./Comment.jsx";
import {NewComment} from "./NewComment.jsx";
//api and logic
import {useEffect, useState} from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../../api.js";

const Comments = ({userId, userName}) => {
  const [backendComents, setBackendComents] = useState([]);
  const [activeComent, setActiveComent] = useState(null);
  const rootComments = backendComents.filter(
    backendComent => backendComent.parentId == null,
  );
  useEffect(() => {
    getCommentsApi().then(data => {
      setBackendComents(data);
    });
  }, []);

  const addComent = text => {
    console.log(text);
    createCommentApi(text).then(comment => {
      setBackendComents([comment, ...backendComents]);
      setActiveComent(null);
    });
  };

  const deleteComment = commentId => {
    if (window.confirm("Estas seguro de querer eliminar este comentario?")) {
      deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComents.filter(
          backendComent => backendComent.id != commentId,
        );
        setBackendComents(updateBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updateBackendComments = backendComents.map(backendComent => {
        if (backendComent.id == commentId) {
          return {...backendComent, body: text};
        }
        return backendComent;
      });
      setBackendComents(updateBackendComments);
      setActiveComent(null);
    });
  };

  return (
    <>
      <NewComment
        submitLabel="Comentar"
        handleSubmit={addComent}
        userName={userName}
      />
      <h2 className="card__h1">Otros Comentarios</h2>
      <div className="comments-container">
        {rootComments.map(rootComment => (
          <Comentario
            key={rootComment.id}
            comment={rootComment}
            userId={userId}
            deleteComment={deleteComment}
            activeComent={activeComent}
            updateComment={updateComment}
            setActiveComent={setActiveComent}
          />
        ))}
      </div>
    </>
  );
};
export default Comments;
