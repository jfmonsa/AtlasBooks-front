import "./BookInformation.sass";
import Card from "../../components/card/Card.jsx";
import Slider from "../../components/slider/Slider.jsx";
import Comentarios from "../../components/commentarySection/Comentarios.jsx";
import {BookInfoContainer} from "./bookInfo/BookInfoContainer.jsx";
import RateStars from "./rate-stars/RateStars.jsx";

const BookInformation = () => {
  return (
    <>
      <Card id="Books-info">
        <BookInfoContainer
          bookName={"Salem's Lot"}
          authorName={"King Stephen"}
          rank={"5.0"}
        ></BookInfoContainer>
      </Card>
      <Card h1Text="Relacionados" id="Books-relacionados">
        <Slider />
      </Card>

      <Card>
        <Comentarios userId={"1"} userName={"Jose"}></Comentarios>
      </Card>
    </>
  );
};

/*
const Card = ({
  h1Text,
  children,
  customCssClassesSection = "",
  customCssClasesH1 = "",
  id,
  h1Center = false,
  cardDialog = false,
})
*/

export default BookInformation;
