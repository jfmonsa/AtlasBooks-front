import "./bookSearchResults.css";
import Searcher from "../../components/searcher/Searcher";
import {Link} from "react-router-dom";
import {AiOutlineStar} from "react-icons/ai";
import {useSearchParams} from "react-router-dom";
import useFetch from "../../utils/useFetch.js";

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
        {results.map(book => {
          return (
            <BookResult
              key={book.id}
              title={book.title}
              autors={book.autors}
              publisher={book.publisher}
              year={book.year}
              language={book.language}
              rate={book.rate || 0}
              urlBook={`/books/${book.id}`}
              pathCoverBook={`http://localhost:3000/storage/books/${book.pathCoverBook}`}
            />
          );
        })}
      </section>
    </>
  );
};

const BookSearch = () => {
  const [searchParams] = useSearchParams();
  //TODO poner aquí todos los query params como null o el valor obtenido del get y en base a eso formar la url
  const search = searchParams.get("search") || "";
  const yearFrom = searchParams.get("yearFrom") || "";
  const yearTo = searchParams.get("yearTo") || "";
  const lang = searchParams.get("language") || "";
  const cat = searchParams.get("category");
  const subCat = searchParams.get("subCategory");

  let parsedSearchParams = `search=${search}&yearFrom=${yearFrom}&yearTo=${yearTo}&language=${lang}`;
  parsedSearchParams += `${cat ? `&category=${cat}` : ""}`;
  parsedSearchParams += `${subCat ? `&subCategory=${subCat}` : ""}`;

  const url = `/searchFilter?${parsedSearchParams}`;
  const {data, isPending, error} = useFetch(url);
  const books = [];

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (data) {
    books.push(data.data);
    return (
      <>
        <h1 className="display--heading">Resultados</h1>
        <Searcher toUrl={""} />
        <BookResultsContainer results={books[0]} totalResults={20} />
      </>
    );
  }
};

export default BookSearch;
