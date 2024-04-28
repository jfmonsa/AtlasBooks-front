import "./BookInformation.sass"
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare"
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload"
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser"
import Card from "../../components/card/Card.jsx";
import SliderRelacionados from "../../components/sliderRelacionados/SliderRelacionados.jsx";

const BookInformation = () => {
  return (
    <>
      <Card h1_text="Inicio/Libro" id="Books-info">
        
        <div className="Buttons">
          <DropDownButtonDescarga/>
          <DropDownButtonCompartir/>
          <DropDownButtonListUser/>
        </div>
      </Card>
      <Card h1_text="Relacionados" id="Books-relacionados">
        <SliderRelacionados/>
      </Card>
    </>
  )
}

export default BookInformation