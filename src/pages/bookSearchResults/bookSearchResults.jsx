import "./bookSearchResults.css";
import Searcher from "../../components/searcher/Searcher";
import {Link} from "react-router-dom";
import {AiOutlineStar} from "react-icons/ai";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import useFetch from "../../utils/useFetch.js";






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

const BookResultsContainer =  ({results, totalResults}) => {
  //`/books/${bookId}`
  //`http://localhost:3000/storage/books/${img}`
  return (
    <>
      <section className="results">
        <p className="results__total">Total: {totalResults} libros</p>
        {results.map(book => {
          return (
            <BookResult
              key={book.id}
              title={book.title}
              autors={book.autors}
              publisher={book.publisher}
              year={book.year}
              language={book.language}
              rate={book.rate}
              urlBook={`/books/${book.id}`}
              pathCoverBook={ `http://localhost:3000/storage/books/${book.pathCoverBook}`}
            />
          );
        })}
      </section>
    </>
  );
};

const BookSearch = () => {
  const [searchParams] = useSearchParams()
  const {data, isPending, error} = useFetch(`http://localhost:3000/api/searchFilter?search=${searchParams.get('search')}&yearFrom=${searchParams.get('yearFrom')}&yearTo=${searchParams.get('yearTo')}&language=${searchParams.get('language')}`);
  
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (data) {
     return (
      <>
        <h1 className="display--heading">Resultados</h1>
        <Searcher toUrl={''} />
        <BookResultsContainer
          results={data.data}
          totalResults={20}
        />
      </>
    );
  } 
 
};

export default BookSearch;
