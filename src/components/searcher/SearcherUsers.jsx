import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SEARCH } from "../../utils/placeholder.js";

const SearcherUsers = ({ holder = SEARCH }) => {
  const navigate = useNavigate();

  // States for filters
  const [userSearch, setUserSearch] = useState("");

  const handleTextChange = ({ target }) => {
    setUserSearch(target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/user-results?search=${userSearch}`);
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
};

export default SearcherUsers;
