import { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../api";
import { Comentario } from "./Comentario";
import "./Comentarios.css";
import { NewComentario } from "./NewComentario.jsx";

const Comentarios = ({ userId, userName }) => {
  const [backendComents, setBackendComents] = useState([]);
  const [activeComent, setActiveComent] = useState(null);
  const rootComments = backendComents.filter(
    (backendComent) => backendComent.parentId == null
  );
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComents(data);
    });
  }, []);

  const addComent = (text) => {
    console.log(text);
    createCommentApi(text).then((comment) => {
      setBackendComents([comment, ...backendComents]);
      setActiveComent(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Estas seguro de querer eliminar este comentario?")) {
      deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComents.filter(
          (backendComent) => backendComent.id != commentId
        );
        setBackendComents(updateBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updateBackendComments = backendComents.map((backendComent) => {
        if (backendComent.id == commentId) {
          return { ...backendComent, body: text };
        }
        return backendComent;
      });
      setBackendComents(updateBackendComments);
      setActiveComent(null);
    });
  };

  return (
    
      <div className="comments">
        <h3 className="comments-title">Comentarios</h3>
        
        <NewComentario submitLabel="Comentar" handleSubmit={addComent} userName = {userName}/>
        <h4 className="comments-title">Otros Comentarios</h4>
        <div className="comments-container">
          {rootComments.map((rootComment) => (
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
      </div>
    
  );
}
export default Comentarios;