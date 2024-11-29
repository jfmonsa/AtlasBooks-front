import "./bookSearchResults.css";
import Searcher from "../../components/searcher/Searcher";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

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
        <img className="bookResult__img" src={pathCoverBook} alt="Book Cover" />
        <div className="bookResult__info">
          <h2 className="bookResult__info__title">{title}</h2>
          <span className="bookResult__info__publisher">{publisher}</span>
          <span className="bookResult__info__autors">{autors}</span>
          <div className="bookResult__sideInfo">
            <span className="bookResult__siderInfo__year">
              <span>Año: </span> {year}
            </span>
            <span className="bookResult__siderInfo__lang">
              <span>Idioma: </span> {language}
            </span>
            <span className="bookResult__siderInfo__rate">
              <AiOutlineStar className="relevantInfo__icon1" />
              {rate} / 5.0
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BookResultsContainer = ({ results, totalResults }) => {
  return (
    <section className="results">
      <p className="results__total">Total: {totalResults} libros</p>
      {results.map((book) => (
        <BookResult
          key={book.id}
          title={book.title}
          autors={book.autors}
          publisher={book.publisher}
          year={book.year}
          language={book.language}
          rate={book.rate || 0}
          urlBook={`/books/${book.id}`}
          pathCoverBook={book.coverImgPath}
        />
      ))}
    </section>
  );
};

const BookSearch = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const yearFrom = searchParams.get("yearFrom");
  const yearTo = searchParams.get("yearTo");
  const lang = searchParams.get("language");
  const cat = searchParams.get("categoryId");
  const subCat = searchParams.get("subCategoryId");

  // Solo agregar los parámetros que tienen valores
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (yearFrom) params.append("yearFrom", yearFrom);
  if (yearTo) params.append("yearTo", yearTo);
  if (lang) params.append("language", lang);
  if (cat) params.append("categoryId", cat);
  if (subCat) params.append("subCategoryId", subCat);

  const url = `/search-filters/books?${params.toString()}`;
  const { data, isPending, error } = useFetch(url);

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (data) {
    console.log(data);
    return (
      <>
        <h1 className="display--heading">Resultados</h1>
        <Searcher toUrl={""} />
        <BookResultsContainer
          results={data.data}
          totalResults={data.data.length}
        />
      </>
    );
  }
};

export default BookSearch;
