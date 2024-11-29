//save to list component
import {useState} from "react";
import {FaRegBookmark} from "react-icons/fa";
import axios from "./../../api/axios.js";
import useFetch from "../../hooks/useFetch.js";
import Checkbox from "@mui/material/Checkbox";

const handleAddDeleteBookToList = async (currentStatus, listId, bookId) => {
  try {
    if (currentStatus) {
      //si esta en true, make a deletion
      await axios.delete("/book-lists/remove-book", {
        data: {
          bookId,
          listId,
        },
      });
    } else {
      //si esta en false, make an insertion
      await axios.put("/book-lists/add-book", {
        bookId,
        listId,
      });
    }
  } catch (error) {
    console.error("Eror al insertar/borrar libro en una lista", error);
  }
};

const AddBookToListDropMenuItem = ({
  listTitle,
  currentBookIn,
  listId,
  bookId,
  userId,
}) => {
  const [mark, setMark] = useState(currentBookIn);
  const handleClick = () => {
    //cambiar el estado de la opción

    handleAddDeleteBookToList(mark, listId, bookId, userId);
    setMark(!mark);
  };

  return (
    <li
      className={`dropMenu__item--avg dropMenu__item  navHover`}
      onClick={handleClick}
    >
      <span className="dropMenu__item__icon">
        <Checkbox checked={mark} />
      </span>
      <span className="dropMenu__item__text">{listTitle}</span>
    </li>
  );
};

const AddBookToListDropMenu = ({
  options,
  orientation = "left",
  infoText,
  bookId,
  userId,
}) => {
  return (
    <ul className={`dropMenu dropMenu--${orientation}`}>
      <li className="dropMenu--infoText"> {infoText} </li>
      {options &&
        options.length > 0 &&
        options.map(option => (
          <AddBookToListDropMenuItem
            key={option.listId}
            listTitle={option.listtitle}
            listId={option.listId}
            currentBookIn={option.currentbookin}
            bookId={bookId}
            userId={userId}
          />
        ))}
    </ul>
  );
};

const AddBookToList = ({bookId, userId}) => {
  const [open, setOpen] = useState(false);

  const {data, error} = useFetch(
    userId ? `/book-lists/my-lists/${bookId}` : null,
  );

  if (error) {
    console.error(
      "Un error ha ocurrido haciendo fetch de las listas del usuario actual",
    );
  }
  //if user is no logged don't show any data
  let infoTextDropMenu;
  if (!data) {
    infoTextDropMenu = "No Tienes listas";
  } else {
    infoTextDropMenu = "Guardar en lista:";
  }

  return (
    <span className="iconDropDown">
      <span onClick={() => setOpen(!open)}>
        <FaRegBookmark className="relevantInfo__icon2" />
      </span>
      {data && open && (
        <AddBookToListDropMenu
          infoText={infoTextDropMenu}
          options={data.data}
          bookId={bookId}
          userId={userId}
        />
      )}
    </span>
  );
};
export default AddBookToList;
