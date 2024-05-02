import Card from "../../components/card/Card";
import Searcher from "../../components/searcher/Searcher";
//Table imports

const TableResults = () => {};
const AdminResults = ({kindOfQuery}) => {
  return (
    <>
      <Card h1Text="Administrar usuarios" h1Center>
        <Searcher holder="Busca a un usuario" toNavigate="results"></Searcher>
      </Card>
    </>
  );
};
export default AdminResults;
