import Searcher from "../../components/searcher/Searcher";
import Card from "../../components/card/Card";
import useFetch from "../../utils/useFetch.js";

import "./categoria.css";

const CategoriesLists = [
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
];

const Catergorie = ({primaryCategory, secundaryCategories}) => {
  return (
    <ul className="category">
      <li className="category__title">{primaryCategory}</li>
      {secundaryCategories.map(sub => {
        return (
          <li key={sub.subcat_id} className="category__subcategory">
            {sub.subcat_name}
          </li>
        );
      })}
    </ul>
  );
};

const Categories = ({catLits}) => {
  return (
    <Card h1Text={"Todas las Categorias"} h1Center>
      <div className="all-categories">
        {catLits.map(cat => {
          return (
            <Catergorie
              key={cat.cat_id}
              primaryCategory={cat.cat_name}
              secundaryCategories={cat.subcategories}
            />
          );
        })}
      </div>
    </Card>
  );
};

const CategoriesMain = ({}) => {
  const {error, isPending, data} = useFetch(
    "http://localhost:3000/api/categories/groupped",
  );
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
        <Categories catLits={data.groupedData} />
      </>
    );
  }
};

export default CategoriesMain;
