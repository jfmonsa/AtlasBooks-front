import "./Searcher.css";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SEARCH } from "@utils/placeholder.js";

export function Searcher2({ holder = SEARCH }) {
  const navigate = useNavigate();

  // States for filters
  const [listN, setlistN] = useState("");

  const handleTextChange = ({ target }) => {
    setlistN(target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/lists-results?listN=${listN}`);
  };

  return (
    <section className="searcher">
      <form onSubmit={handleSearch}>
        <div className="searcher__inputContainer">
          <input
            type="text"
            className="searcher__input"
            placeholder={holder}
            onChange={handleTextChange}
          />
          <PrimaryBtnForm
            text="Buscar"
            cssClasses="searcher__button black2Btn"
          />
        </div>
      </form>
    </section>
  );
}
