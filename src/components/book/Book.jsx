import "./book.css";

const Book = ({title, autor, img}) => {
  return (
    <div className="bookContainer">
      <img
        className="img"
        src={img}
        alt={`Imagen de la portada del libro: ${title}, por ${autor}`}
      />
      <h2 className="tittleContainer">{title}</h2>
      <p className="autorContainer">{autor}</p>
    </div>
  );
};

export default Book;
