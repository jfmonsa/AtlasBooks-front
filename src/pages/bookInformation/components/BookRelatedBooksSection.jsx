//Relacionados
import Slider from "../../../components/slider/Slider.jsx";
import Card from "../../../components/card/Card.jsx";

export function BookRelatedBooksSection({ books }) {
  return (
    <Card h1Text="Relacionados" id="Books-relacionados">
      <Slider books={books} />
    </Card>
  );
}
