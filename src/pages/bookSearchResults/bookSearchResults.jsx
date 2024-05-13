import Searcher from "../../components/searcher/Searcher";
import {Link} from "react-router-dom";

//Temp data for book results
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import image4 from "../../assets/img/image4.png";
import image5 from "../../assets/img/image5.png";
const totalResults = 20;
const searchResults = [
  {
    title: "El nombre del viento",
    autors: "Patrick Rothfuss",
    publisher: "DAW Books",
    year: 2007,
    language: "Español",
    rate: 4.5,
    urlBook: "/libros/el-nombre-del-viento",
    pathCoverBook: image1,
  },
  {
    title: "1984",
    autors: "George Orwell",
    publisher: "Secker & Warburg",
    year: 1949,
    language: "Inglés",
    rate: 4.8,
    urlBook: "/libros/1984",
    pathCoverBook: image2,
  },
  {
    title: "Cien años de soledad",
    autors: "Gabriel García Márquez",
    publisher: "Editorial Sudamericana",
    year: 1967,
    language: "Español",
    rate: 4.7,
    urlBook: "/libros/cien-anos-de-soledad",
    pathCoverBook: image3,
  },
  {
    title: "Harry Potter y la piedra filosofal",
    autors: "J.K. Rowling",
    publisher: "Bloomsbury Publishing",
    year: 1997,
    language: "Inglés",
    rate: 4.9,
    urlBook: "/libros/harry-potter-y-la-piedra-filosofal",
    pathCoverBook: image5,
  },
  {
    title: "Matar a un ruiseñor",
    autors: "Harper Lee",
    publisher: "J. B. Lippincott & Co.",
    year: 1960,
    language: "Inglés",
    rate: 4.6,
    urlBook: "/libros/matar-a-un-ruisenor",
    pathCoverBook: image4,
  },
  {
    title: "El señor de los anillos: La comunidad del anillo",
    autors: "J.R.R. Tolkien",
    publisher: "George Allen & Unwin",
    year: 1954,
    language: "Inglés",
    rate: 4.9,
    urlBook: "/libros/el-senor-de-los-anillos-la-comunidad-del-anillo",
    pathCoverBook: image1,
  },
  {
    title: "Don Quijote de la Mancha",
    autors: "Miguel de Cervantes",
    publisher: "Francisco de Robles",
    year: 1605,
    language: "Español",
    rate: 4.7,
    urlBook: "/libros/don-quijote-de-la-mancha",
    pathCoverBook: image5,
  },
  {
    title: "Orgullo y prejuicio",
    autors: "Jane Austen",
    publisher: "T. Egerton, Whitehall",
    year: 1813,
    language: "Inglés",
    rate: 4.7,
    urlBook: "/libros/orgullo-y-prejuicio",
    pathCoverBook: image3,
  },
  {
    title: "El alquimista",
    autors: "Paulo Coelho",
    publisher: "Rocco",
    year: 1988,
    language: "Portugués",
    rate: 4.6,
    urlBook: "/libros/el-alquimista",
    pathCoverBook: image1,
  },
  {
    title: "La sombra del viento",
    autors: "Carlos Ruiz Zafón",
    publisher: "Planeta",
    year: 2001,
    language: "Español",
    rate: 4.5,
    urlBook: "/libros/la-sombra-del-viento",
    pathCoverBook: image3,
  },
];

//Aux functions
const BookResult = ({
  title,
  autors,
  publisher,
  year,
  language,
  rate,
  urlBook,
  pathCoverBook,
}) => {
  return (
    <Link className="bookResult" to={urlBook}>
      <img className="bookResult__img" src={pathCoverBook}></img>
      <div className="bookResult__mainInfo">
        <h2 className="bookResult__mainInfo__title">{title}</h2>
        <span className="bookResult__mainInfo__autors">{autors}</span>
        <span className="bookResult__mainInfo__publisher">{publisher}</span>
      </div>
      <div className="bookResult__sideInfo">
        <span className="bookResult__siderInfo__year">{year}</span>
        <span className="bookResult__siderInfo__lang">{language}</span>
        <span className="bookResult__siderInfo__rate">{rate}</span>
      </div>
    </Link>
  );
};

const BookResultsContainer = ({results}) => {
  return (
    <section>
      {results.map(book => {
        return (
          <BookResult
            title={book.title}
            autors={book.autors}
            publisher={book.publisher}
            year={book.year}
            language={book.language}
            rate={book.rate}
            urlBook={book.urlBook}
            pathCoverBook={book.pathCoverBook}
          />
        );
      })}
    </section>
  );
};

const BookSearch = () => {
  return (
    <>
      <h1 className="display--heading">Resultados</h1>
      <Searcher type={"text"} />
      <BookResultsContainer results={searchResults} />
    </>
  );
};

export default BookSearch;
