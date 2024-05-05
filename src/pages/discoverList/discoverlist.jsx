import Slider from "../../components/slider/Slider.jsx";
import Searcher from "../../components/searcher/Searcher.jsx";
import Card from "../../components/card/Card";
import "./discoverList.css";
import "../../components/gridBooks/gridBooks.css";

const DiscoverList = ({}) => {
  return (
    <>
        <h1 className="display--heading">Descubre listas</h1>
        <h2 className="display--subheading">Best ranked</h2>
        <div className="listSearch">
        <Searcher/>     
        </div>
        <Card>
            <div className="titleListC">
                <div className="headerList">
               <h3 className="titleList">Top 100 venecos</h3>
               <h4 className="subtitleList">Creado por Maduro</h4> 
               </div>
               <div className="followList">
                <h5 className="booksNumber">98 libros</h5>
                <h6  className="booksNumber">540 seguidores</h6>
                <button className="buttonFollowList">seguir</button>
                </div>
               </div> 
               
               <p className="discoverInfoList">Tengo hambre</p>  
            <div className="sliderList">      
            <Slider />
            </div> 
      </Card>
        
      <Card>
            <div className="titleListC">
                <div className="headerList">
               <h3 className="titleList">Top 100 venecos</h3>
               <h4 className="subtitleList">Creado por Maduro</h4> 
               </div>
               <div className="followList">
                <h5 className="booksNumber">98 libros</h5>
                <h6  className="booksNumber">540 seguidores</h6>
                <button className="buttonFollowList">seguir</button>
                </div>
               </div> 
               
               <p className="discoverInfoList">Tengo hambre</p>  
            <div className="sliderList">      
            <Slider />
            </div> 
      </Card>

      

    </>
  );
};

export default DiscoverList;
