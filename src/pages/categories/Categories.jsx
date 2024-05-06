import Searcher from "../../components/searcher/Searcher";
import Catergoria from "./Categoria";
import Card from "../../components/card/Card";
const Categories = ({}) => {
  return (
    <>
      <h1>Categorias</h1>
      <Searcher holder={"Buscar libro..."}></Searcher>
      <Card h1Text={"Todas las Categorias"} h1Center>
        <Catergoria />
      </Card>
    </>
  );
};

export default Categories;
