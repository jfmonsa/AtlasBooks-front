import GridBooks from "../../components/gridBooks/GridBooks";

//to fetch data
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const Lists = () => {
  const { idList } = useParams();
  const { data, error, isPending } = useFetch(`/book-lists/${idList}`);
  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (data) {
    return (
      <>
        <h1 className="title1">{data.data.title}</h1>
        <h2 className="display--subheading">{data.description}</h2>
        {/* TODO: hacer un boton de acciones para editar detalles de la lista o eliminarla */}
        <GridBooks books={data.data.books} />
      </>
    );
  }
};

export default Lists;
