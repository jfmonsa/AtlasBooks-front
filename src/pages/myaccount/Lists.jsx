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
  // Agrega más objetos de libros según sea necesario
];

const Lists = ({title, description}) => {
  return (
    <>
      <h1 className="title1">Nombre lista</h1>
      <h2 className="display--subheading">Descripción de lista</h2>
      {/* TODO: hacer un boton de acciones para editar detalles de la lista o eliminarla */}
      <GridBooks books={books} />
    </>
  );
};

export default Lists;
