import Searcher from "../../components/searcher/Searcher";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import image4 from "../../assets/img/image4.png";
import image5 from "../../assets/img/image5.png";
import GridBooks from "../../components/gridBooks/GridBooks";

const books = [
  {
    title: "The Alchemist",
    autor: "Pablo Coelho",
    img: image1,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image2,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image3,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image4,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image5,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image4,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image2,
  },
  {
    title: "Another Book",
    autor: "Another Author",
    img: image3,
  },
];

const Recommended = () => {
  return (
    <>
      <h1 className="display--heading">Recomendados</h1>
      <h2 className="display--subheading">Best ranked</h2>

      <Searcher />
      <GridBooks books={books} />
    </>
  );
};

export default Recommended;
