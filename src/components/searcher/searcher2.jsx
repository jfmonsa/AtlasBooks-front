import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {SEARCH} from "../../utils/placeholder.js";

const Searcher = ({holder = SEARCH}) => {
  const navigate = useNavigate();

  // States for filters
  const [listN, setlistN] = useState("");

  const handleTextChange = ({target}) => {
    setlistN(target.value);
  };

  const handleSearch = event => {
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
};

export default Searcher;
