import "./BookInformation.sass";
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser";
import Card from "../../components/card/Card.jsx";
import SliderRelacionados from "../../components/sliderRelacionados/SliderRelacionados.jsx";
import {Link} from "react-router-dom";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import Comentarios from "../../components/commentarySection/Comentarios.jsx"
import { BookInfoContainer } from "../../components/bookInfo/BookInfoContainer.jsx";
import RateStars from "../../components/rate-stars/RateStars.jsx"

const BookInformation = () => {
  return (
    <>
      <Card id="Books-info">
        <BookInfoContainer 
        bookName={"Salem's Lot"} 
        authorName={"King Stephen"}
        rank={"5.0"}></BookInfoContainer>
      </Card>
      <Card h1_text="Relacionados" id="Books-relacionados">
        <SliderRelacionados />
      </Card>
      <Card>
        <RateStars/>
      </Card>
      <Card>
        <Comentarios userId={"1"} userName={"Jose"}></Comentarios>
      </Card>
    </>
  );
};

export default BookInformation;
