import "./book.css";
import {Link} from "react-router-dom";

const Book = ({title, autor, img, url = "/book-information"}) => {
  return (
    <Link to={url}>
      <div className="bookContainer">
        <img
          className="img"
          src={img}
          alt={`Imagen de la portada del libro: ${title}, por ${autor}`}
        />
        <h2 className="tittleContainer">{title}</h2>
        <p className="autorContainer">{autor}</p>
      </div>
    </Link>
  );
};

export default Book;
