import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import baseUrl from "../../api/baseUrl.js";
import useFetch from "../../utils/useFetch.js";
import Searcher2 from "../../components/searcher/searcher2.jsx";

const ListResult = ({
  id,
  title,
  descriptionL,
  dateL,
  idUserCreator,
  urlList,
}) => {
  return (
    <Link to={urlList}>
      <div className="bookResult">
        <div className="bookResult__info">
          <h2 className="bookResult__info__title">{title}</h2>
          <span className="bookResult__info__publisher">{descriptionL}</span>
          <span className="bookResult__info__autors">{idUserCreator}</span>
          <div className="bookResult__sideInfo">
            <span className="bookResult__siderInfo__year">
              <span>fecha creacion: </span> {" " + dateL}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ListResultsContainer = ({results, totalResults}) => {
  return (
    <>
      <section className="results">
        <p className="results__total">Total: {totalResults} listas</p>
        {results.map(list => {
          return (
            <ListResult
              key={list.id} // Usa una clave única
              id={list.id}
              title={list.title}
              descriptionL={list.descriptionL} // Asegúrate de que los nombres de los campos coincidan
              dateL={list.dateL}
              idUserCreator={list.idUserCreator}
              urlList={`/my-lists/${list.id}`} // Asegúrate de que esto sea correcto
            />
          );
        })}
      </section>
    </>
  );
};

const ListSearch = () => {
  const [searchParams] = useSearchParams();
  const listN = searchParams.get("listN");

  const {data, isPending, error} = useFetch(
    listN ? `/searchFilterLists?listN=${listN}` : null,
  );

  if (!listN) {
    return <p>Por favor ingrese un término de búsqueda.</p>;
  }

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
        <Searcher2 toUrl={""} />
        <ListResultsContainer
          results={data.data}
          totalResults={data.data.length}
        />
      </>
    );
  }

  return null; // Return null if there's no data, pending status, or error
};

export default ListSearch;
