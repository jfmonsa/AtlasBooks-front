import "./DiscoverListPage.css";

import { Searcher2 } from "@/components/Searcher/Searcher2.jsx";
import { Card } from "@/components/Card/Card.jsx";
import { Slider } from "@/components/Slider/Slider.jsx";
import { useToggleState } from "@/hooks/useToggleState";

// Temporal data
// NOTE: feature not implemented, temporary array
const lists = [];
const booksTmp = [];

export function DiscoverListPage() {
  return (
    <>
      <h1 className="display--heading">Descubre listas</h1>
      <h2 className="display--subheading">Best ranked</h2>
      <Searcher2 />
      {lists.map((list, index) => (
        <DiscoverListList
          key={index}
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
}

function FollowBtnList() {
  const [isFollowed, toggleFollow] = useToggleState();
  let btnClassName = "list__follow__btn ";
  let btnText = "";

  if (isFollowed) {
    btnClassName += "list__follow__btn--followed";
    btnText = "Seguido";
  } else {
    btnClassName += "list__follow__btn--unfollowed";
    btnText = "Seguir";
  }
  return (
    <button onClick={toggleFollow} className={btnClassName}>
      {btnText}
    </button>
  );
}

function DiscoverListList({
  title,
  author,
  nBooks,
  nFollowers,
  description,
  books,
}) {
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
}
