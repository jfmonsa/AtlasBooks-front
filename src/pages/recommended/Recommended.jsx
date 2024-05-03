import "./recommended.css";
import Searcher from "../../components/searcher/Searcher";
import Book from "../../components/book/Book";
import image1 from "../../assets/img/image1.png";
const Recommended = ({}) => {
  return (
    <>
      <h1 className="title1">Recomendados</h1>
      <h2 className="title2">Best ranked</h2>
      <div>
        <Searcher type={"text"} holder={"Buscar libro"} />
      </div>
      <div className="buttonMasOpciones">
        <button className="buttonOpciones">Más opciones</button>
      </div>
      <div className="bookRecommended">
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
      <div className="ContainerVerMass">
        <h1 className="line1"></h1>
        <button className="buttonVerMas">Ver mas</button>
        <h2 className="line2"></h2>
      </div>
    </>
  );
};

export default Recommended;
