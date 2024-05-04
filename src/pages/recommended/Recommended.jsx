import "./recommended.css";
import Searcher from "../../components/searcher/Searcher";
import Book from "../../components/book/Book";
import image1 from "../../assets/img/image1.png";

const GridBooks = ({books}) => {
  return (
    <>
      <div className="gridBooks">
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />

        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />

        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />

        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
      </div>
      <div className="gridBooks__loadMoreContainer">
        <button className="formCustomBtn gridBooks__loadMoreBtn baseBtn black2Btn">
          Ver mas
        </button>
      </div>
    </>
  );
};

const Recommended = ({}) => {
  return (
    <>
      <h1 className="display--heading">Recomendados</h1>
      <h2 className="display--subheading">Best ranked</h2>

      <Searcher type={"text"} holder={"Buscar libro"} />
      {/* <button className="buttonOpciones">Más opciones</button> */}
      <GridBooks />
    </>
  );
};

export default Recommended;
