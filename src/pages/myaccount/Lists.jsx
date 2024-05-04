import Searcher from "../../components/searcher/Searcher";
import Card from "../../components/card/Card.jsx";
import Slider from "../../components/slider/Slider.jsx";

const Lists = ({}) => {
  return (
    <>
      <h1 className="title1">Tus listas</h1>
      <div>
        <Searcher type={"text"} holder={"Buscar lista"} />
      </div>
      <div className="buttonMasOpciones">
        <button className="buttonOpciones">Más opciones</button>
      </div>
      <Card h1Text="Lista de favoritos">
        <Slider />
      </Card>
      <Card h1Text="Lista por leer">
        <Slider />
      </Card>
      <Card h1Text="Lista ficcion">
        <Slider />
      </Card>

      <button className="buttonVerMas">Ver mas</button>
    </>
  );
};

export default Lists;
