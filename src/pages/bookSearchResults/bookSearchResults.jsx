import "./bookSearchResults.css";
import Searcher from "../../components/searcher/Searcher";
import {Link} from "react-router-dom";
import {AiOutlineStar} from "react-icons/ai";


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
  
 }
];



//Aux functions
const BookResult = (
  
  {
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
  
    <Link to={urlBook}>
      <div className="bookResult">
        <img className="bookResult__img" src={pathCoverBook}></img>
        <div className="bookResult__info">
          <h2 className="bookResult__info__title">{title}</h2>
          <span className="bookResult__info__publisher">{publisher}</span>
          <span className="bookResult__info__autors">{autors}</span>
          <div className="bookResult__sideInfo">
            <span className="bookResult__siderInfo__year">
              <span>Año: </span> {" " + year}
            </span>
            <span className="bookResult__siderInfo__lang">
              <span>Idioma: </span> {" " + language}
            </span>
            <span className="bookResult__siderInfo__rate">
              <AiOutlineStar className="relevantInfo__icon1" />
              {rate + " "} / 5.0
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BookResultsContainer = ({results, totalResults}) => {
  return (
    <>
      <section className="results">
        <p className="results__total">Total: {totalResults} libros</p>
        {results.map((book, index) => {
          return (
            <BookResult
              key={index}
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
    </>
  );
};

const BookSearch = () => {
  return (
    <>
      <h1 className="display--heading">Resultados</h1>
      <Searcher toUrl="/search-results" />
      <BookResultsContainer
        results={searchResults}
        totalResults={totalResults}
      />
    </>
  );
};

export default BookSearch;
