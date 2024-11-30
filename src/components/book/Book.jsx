import "./book.css";
import { Link } from "react-router-dom";

const Book = ({ title, authors, img, bookId, index }) => {
  return (
    <Link to={`/books/${bookId}`}>
      <div className="bookContainer" key={index}>
        <img
          className="img"
          src={img}
          alt={`Imagen de la portada del libro: ${title}, por ${authors}`}
        />
        <h2 className="tittleContainer">{title}</h2>
        <p className="autorContainer">{authors}</p>
      </div>
    </Link>
  );
};

export default Book;
