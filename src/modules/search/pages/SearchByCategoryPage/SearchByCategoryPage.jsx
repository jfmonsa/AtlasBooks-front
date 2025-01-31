import "./SearchByCategoryPage.css";

import { Searcher } from "@components/Searcher/Searcher";
import { Card } from "@components/Card/Card";
import { Link } from "react-router-dom";

import useFetch from "@hooks/useFetch.js";

export function SearchByCategoryPage() {
  const { error, isPending, data } = useFetch(`/book-categories/groupped`);
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (data) {
    return (
      <>
        <h1 className="display--heading">Categorias</h1>
        <Searcher holder={"Buscar libro..."}></Searcher>
        <Categories catLits={data.data} />
      </>
    );
  }
}

function Catergorie({ primaryCategory, secundaryCategories }) {
  return (
    <ul className="category">
      <li key={primaryCategory.categoryId} className="category__title">
        <Link to={`/search-results?category=${primaryCategory.categoryId}`}>
          {primaryCategory.category}
        </Link>
      </li>
      {secundaryCategories.map((sub) => {
        return (
          <li key={sub.id} className="category__subcategory">
            <Link to={`/search-results?subCategory=${sub.id}`}>{sub.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function Categories({ catLits }) {
  return (
    <Card h1Text={"Todas las Categorias"} h1Center>
      <div className="all-categories">
        {catLits.map((cat) => {
          return (
            <Catergorie
              key={cat.cat_id}
              primaryCategory={cat}
              secundaryCategories={cat.subcategories}
            />
          );
        })}
      </div>
    </Card>
  );
}
