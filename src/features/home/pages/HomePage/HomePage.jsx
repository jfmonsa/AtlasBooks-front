import { Searcher } from "@components/Searcher/Searcher";
import { GridBooks } from "@components/GridBooks/GridBooks";
import useFetch from "@hooks/useFetch.js";

export function HomePage() {
  const { data, isPending, error } = useFetch(`/feed-recommended`);

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
        <GridBooks books={data.data} />
      </>
    );
  }
}
