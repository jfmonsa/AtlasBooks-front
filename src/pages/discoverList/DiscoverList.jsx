import Slider from "../../components/slider/Slider.jsx";
import Searcher from "../../components/searcher/Searcher.jsx";
import Card from "../../components/card/Card.jsx";
import "./discoverList.css";
import "../../components/gridBooks/gridBooks.css";

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
          <button className="list__follow__btn">seguir</button>
        </div>
      </div>

      <p className="list__description">{description}</p>
      {/* TODO: pasar parametro books (lista de libros) */}
      <div className="list__slider">
        <Slider />
      </div>
    </Card>
  );
};

const DiscoverList = () => {
  return (
    <>
      <h1 className="display--heading">Descubre listas</h1>
      <h2 className="display--subheading">Best ranked</h2>
      <Searcher />
      {lists.map((list, index) => (
        <DiscoverListList
          key={index}
          title={list.title}
          author={list.author}
          nBooks={list.nBooks}
          nFollowers={list.nFollowers}
          description={list.description}
        />
      ))}
    </>
  );
};

export default DiscoverList;
