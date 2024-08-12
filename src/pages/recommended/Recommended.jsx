import Searcher from "../../components/searcher/Searcher";
import GridBooks from "../../components/gridBooks/GridBooks";
import useFetch from "../../utils/useFetch.js";

const Recommended = () => {
  const {data, isPending, error} = useFetch(`/feed`);

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (data) {
    return (
      <>
        <h1 className="display--heading">Recomendados</h1>
        <h2 className="display--subheading">Best ranked</h2>

        <Searcher toUrl="search-results" />
        <GridBooks books={data.recommended_feed} />
      </>
    );
  }
};

export default Recommended;
