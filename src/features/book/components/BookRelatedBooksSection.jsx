import { Slider } from "@components/Slider/Slider.jsx";
import { Card } from "@components/Card/Card.jsx";

export function BookRelatedBooksSection({ books }) {
  return (
    <Card h1Text="Relacionados" id="Books-relacionados" notFullWidth>
      <Slider books={books} />
    </Card>
  );
}
