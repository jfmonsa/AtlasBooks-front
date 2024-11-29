import Slider from "../../components/slider/Slider.jsx";
import Searcher2 from "../../components/searcher/searcher2.jsx";
import Card from "../../components/card/Card.jsx";
import "./discoverList.css";
import "../../components/gridBooks/gridBooks.css";
import { useState } from "react";

//Images for temporal array of books
//TODO: Borrar esto cuando se haga la conexión a la db y los libros se obtengan de ahí
import Imagen1 from "../../assets/img/image1.png";
import Imagen2 from "../../assets/img/image2.png";
import Imagen3 from "../../assets/img/image3.png";
import Imagen4 from "../../assets/img/image4.png";
import Imagen5 from "../../assets/img/image5.png";

// Temporal data
// TODO: Borrar esto cuando se haga la conexión con la db
const lists = [
  {
    title: "Top 100 Literatura Clásica",
    author: "Mauro",
    nBooks: 98,
    nFollowers: "540",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
  },
  {
    title: "Top 69 Basura Comercial",
    author: "Pepito el punkero",
    nBooks: 69,
    nFollowers: "876",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
  },
];
const booksTmp = [
  {
    author: "Pepito Perez",
    title: "Pepe tenia una pipa",
    pathBookCover: Imagen1,
  },
  {
    author: "Gogó manotas",
    title: "Bases de datos relacionales",
    pathBookCover: Imagen2,
  },
  {
    author: "Carlos Delgado",
    title: "Salem's lot",
    pathBookCover: Imagen3,
  },
  {
    author: "Jaimito el Carterito",
    title: "Odio al chavo",
    pathBookCover: Imagen4,
  },
  {
    author: "Karl Marx",
    title: "Das Kapital",
    pathBookCover: Imagen5,
  },
];
// Aux functions
const FollowBtnList = () => {
  const [followed, setFollowed] = useState(false);
  let btnClassName = "list__follow__btn ";
  let btnText = "";

  if (followed) {
    btnClassName += "list__follow__btn--followed";
    btnText = "Seguido";
  } else {
    btnClassName += "list__follow__btn--unfollowed";
    btnText = "Seguir";
  }
  return (
    <button
      onClick={() => {
        setFollowed(!followed);
      }}
      className={btnClassName}
    >
      {btnText}
    </button>
  );
};

// main component
const DiscoverListList = ({
  title,
  author,
  nBooks,
  nFollowers,
  description,
  books,
}) => {
  return (
    <Card customH1>
      <div className="listExplore">
        <div className="list__info">
          <h1 className="list__info__title">{title}</h1>
          <h2 className="list__info__autor">{`Creado por ${author}`}</h2>
        </div>
        <div className="list__follow">
          <h5 className="list__follow__nBooks">{`${nBooks} libros`} </h5>
          <h6 className="list__follow__nFollowers">{`${nFollowers} seguidores`}</h6>
          <FollowBtnList />
        </div>
      </div>

      <p className="list__description">{description}</p>
      {/* TODO: pasar parametro books (lista de libros) */}
      <div className="list__slider">
        <Slider books={books} />
      </div>
    </Card>
  );
};

const DiscoverList = () => {
  return (
    <>
      <h1 className="display--heading">Descubre listas</h1>
      <h2 className="display--subheading">Best ranked</h2>
      <Searcher2 />
      {lists.map((list, index) => (
        <DiscoverListList
          key={index} // Agrega la prop key con el valor único del índice
          title={list.title}
          author={list.author}
          nBooks={list.nBooks}
          nFollowers={list.nFollowers}
          description={list.description}
          books={booksTmp}
        />
      ))}
    </>
  );
};

export default DiscoverList;
