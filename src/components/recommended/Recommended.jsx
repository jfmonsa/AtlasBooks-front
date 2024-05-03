import "./recommended.css";
import Book from "../book/Book";
import image1 from "../../assets/img/image1.png";

const Recommended = ({}) => {
  return (
    <div className="Container">
      <div className="titleContainer">
        <div className="title">
          <h1>Recomendados</h1>
        </div>
        <div className="bestRanked">
          <h2>Best ranked</h2>
        </div>
      </div>
      <div className="booksContainer">
        <Book title={"The Alchemist"} autor={"Pablo Coelhoe"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
        <Book title={"The Alchemist"} autor={"Pablo Coelho"} img={image1} />
      </div>
      <div className="buttonContainer">
        <h1 className="line1"></h1>
        <button className="button">Ver mas</button>
        <h2 className="line2"></h2>
      </div>
    </div>
  );
};

export default Recommended;
