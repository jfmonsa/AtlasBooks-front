import "./BookInformation.sass";
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser";
import Card from "../../components/card/Card.jsx";
import SliderRelacionados from "../../components/sliderRelacionados/SliderRelacionados.jsx";
import {Link} from "react-router-dom";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";

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
        <SliderRelacionados />
      </Card>
    </>
  );
};

export default BookInformation;
