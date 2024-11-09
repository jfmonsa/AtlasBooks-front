
import Searcher from "../../components/searcher/Searcher";
import Card from "../../components/card/Card";
import baseUrl from "../../api/baseUrl.js";
import useFetch from "../../utils/useFetch.js";
import {Link} from "react-router-dom";

import "./categoria.css";

const Catergorie = ({primaryCategory, secundaryCategories}) => {
  return (
    <ul className="category">
      <li key={primaryCategory.categoryId} className="category__title">
        <Link to={`/search-results?category=${primaryCategory.categoryId}`}>
          {primaryCategory.category}
        </Link>
      </li>
      {secundaryCategories.map(sub => {
        return (
          <li key={sub.id} className="category__subcategory">
            <Link to={`/search-results?subCategory=${sub.id}`}>
              {sub.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Categories = ({catLits}) => {
  console.log(catLits);
  return (
    <Card h1Text={"Todas las Categorias"} h1Center>
      <div className="all-categories">
        {catLits.map(cat => {
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
};

const CategoriesMain = ({}) => {
  const {error, isPending, data} = useFetch(`${baseUrl}/book-categories/groupped`);
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
};

export default CategoriesMain;

