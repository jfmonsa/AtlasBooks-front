import Searcher from "../../components/searcher/Searcher";
import Card from "../../components/card/Card";

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
      {secundaryCategories.map((cat, index) => {
        return (
          <li key={index} className="category__subcategory">
            {cat}
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
        {catLits.map((cat, index) => {
          return (
            <Catergorie
              key={index}
              primaryCategory={cat.primary_name}
              secundaryCategories={cat.secundary}
            />
          );
        })}
      </div>
    </Card>
  );
};

const CategoriesMain = ({}) => {
  return (
    <>
      <h1 className="display--heading">Categorias</h1>
      <Searcher holder={"Buscar libro..."}></Searcher>
      <Categories catLits={CategoriesLists} />
    </>
  );
};

export default CategoriesMain;
