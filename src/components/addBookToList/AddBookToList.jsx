//save to list component
import {useState} from "react";
import {FaRegBookmark, FaBookmark} from "react-icons/fa";
import axios from "./../../api/axios.js";
import useFetch from "../../utils/useFetch.js";
import baseUrl from "../../api/baseUrl.js";
import Checkbox from "@mui/material/Checkbox";

const handleAddDeleteBookToList = async (
  currentStatus,
  listId,
  bookId,
  userId,
) => {
  try {
    if (currentStatus) {
      //si esta en true, make a deletion
      const response = await axios.delete("/lists/deleteBookToList", {
        data: {
          bookId,
          userId,
          listId,
        },
      });
    } else {
      //si esta en false, make an insertion
      const response = await axios.put("/lists/addBookToList", {
        bookId,
        userId,
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
            listTitle={option.listTitle}
            listId={option.listId}
            currentBookIn={option.currentBookIn}
            bookId={bookId}
            userId={userId}
          />
        ))}
    </ul>
  );
};

const AddBookToList = ({bookId, isAuthenticated, userId}) => {
  const [open, setOpen] = useState(false);
  const {data, isPending, error} = useFetch(
    `${baseUrl}/lists/myLists/basicInfo/${userId}/${bookId}`,
  );

  if (error) {
    console.error(
      "Un error ha ocurrido haciendo fetch de las listas del usuario actual",
    );
  }
  //if user is no logged don't show any data
  let infoTextDropMenu;
  if (!isAuthenticated) {
    infoTextDropMenu = "Debe loggearse";
  } else if (!data) {
    infoTextDropMenu = "No Tienes listas";
  } else {
    infoTextDropMenu = "Guardar en lista:";
  }

  return (
    <span className="iconDropDown">
      <span
        onClick={() => {
          setOpen(!open);
          if (open && !isAuthenticated) {
            alert("Debe loggearse para guaradar libros en sus listas");
          }
        }}
      >
        <FaRegBookmark className="relevantInfo__icon2" />
      </span>
      {open && (
        <AddBookToListDropMenu
          infoText={infoTextDropMenu}
          options={data}
          bookId={bookId}
          userId={userId}
        />
      )}
    </span>
  );
};
export default AddBookToList;
