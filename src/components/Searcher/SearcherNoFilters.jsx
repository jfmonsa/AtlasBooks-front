import "./Searcher.css";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "@utils/placeholder.js";

//Main functions
export function SearcherNoFilters({ holder = SEARCH, toUrl }) {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(toUrl);
  };

  return (
    <section className="searcher">
      <form className="searcher__inputContainer" onSubmit={handleSearch}>
        <input type="text" className="searcher__input" placeholder={holder} />
        <PrimaryBtnForm
          text="Buscar"
          cssClasses=" searcher__button black2Btn"
        />
      </form>
    </section>
  );
}
