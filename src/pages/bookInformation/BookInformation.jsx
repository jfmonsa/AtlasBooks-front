import "./BookInformation.sass";
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser";
import Card from "../../components/card/Card.jsx";
import Slider from "../../components/sliderRelacionados/Slider.jsx";
import {Link} from "react-router-dom";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import Comentarios from "../../components/commentarySection/Comentarios.jsx";

const BookInformation = () => {
  return (
    <>
      <Card h1_text="Inicio/Libro" id="Books-info">
        <div className="Buttons">
          <DropDownButtonDescarga />
          <DropDownButtonCompartir />
          <DropDownButtonListUser />
          <Link to="/Report">
            <PrimaryBtnForm
              text="Reportar"
              cssClasses="formCustomBtn black2Btn"
            />
          </Link>
        </div>
      </Card>
      <Card h1_text="Relacionados" id="Books-relacionados">
        <Slider />
      </Card>
      <Card>
        <Comentarios></Comentarios>
      </Card>
    </>
  );
};

export default BookInformation;
