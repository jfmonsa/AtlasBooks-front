import "./recommended.css";
import Searcher from "../../components/searcher/Searcher";
import Book from "../../components/book/Book";
import image1 from "../../assets/img/image1.png"
const Recommended = ({}) => {
  return (
    <div className="Container">
        <div className="headerContainer">
        <div className="titleContainer">
          <h1 className="title1">Recomendados</h1>
          <div className="subtitle">
            <h2 className="title2">Best ranked</h2>
            </div>
        </div>
        <div className="browser">
          <Searcher type={"text"} holder={"Buscar libro"} />
          <button className="button">Más opciones</button>
        </div>
      </div>
      <div className="Container2">
        <div className="bookContainer">
        <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
        </div>
        <div className="bookContainer">
        <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
        </div>
        <div className="bookContainer">
        <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
        </div>
        <div className="bookContainer">
        <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
            <Book 
            title={'The Alchemist'}
            autor={'Pablo Coelho'}
            img={image1}
            />
        </div>
        <div className="verMas">  
                <h1 className="line1"></h1>
                <button className="button">Ver mas</button>
                <h2 className="line2"></h2>
        </div>
      </div>
    </div>
  );
};

export default Recommended;