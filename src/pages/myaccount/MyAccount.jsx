import "./myaccount.css";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Slider from "../../components/slider/Slider.jsx";
import Card from "../../components/card/Card.jsx";
import { Link, useNavigate } from "react-router-dom";
//for option's section
import IconPaypal from "../../assets/icons/icon-paypal.svg";
import IconLogout from "../../assets/icons/menu-logout.svg";
import IconEditEmail from "../../assets/icons/icon-edit-email.svg";
import IconEditDetails from "../../assets/icons/icon-edit-details.svg";
import IconShieldPass from "../../assets/icons/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icons/icon-delaccount.svg";
import DropMenu from "../../components/dropMenu/DropMenu.jsx";

//icons for my lists' section
import PrivateListIcon from "./../../assets/icons/icon-privatelist.svg";
import PublicListIcon from "./../../assets/icons/icon-publiclist.svg";
//Admin page
import SearcherUsers from "../../components/searcher/SearcherUsers.jsx";
import SearcherNoFilters from "../../components/searcher/SearcherNoFilters.jsx";
import { getReportsApi } from "../../api/reports.js";

//imgs para libros
import { useAuth } from "../../hooks/useAuth.js";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import axios from "../../api/axios.js";

// Aux functions
const SectionMyDataDatum = ({ left, right }) => {
  return (
    <li className="card-myData">
      <span className="card-myData__left">{left}</span>
      <span className="card-myData__right">{right}</span>
    </li>
  );
};

const SectionMyData = ({
  name,
  nickname,
  email,
  country,
  registerDate,
  role,
}) => {
  return (
    <Card h1Text="Mis datos">
      <ul>
        <SectionMyDataDatum left="Nombre" right={name} />
        <SectionMyDataDatum left="Nickname" right={nickname} />
        <SectionMyDataDatum left="Email" right={email} />
        <SectionMyDataDatum left="País" right={country} />
        <SectionMyDataDatum left="Fecha de Registro" right={registerDate} />
        {/* TODO: mejorar los estilos del admin y la alinación en los lists, mirar como incluir la imagen de perfil */}
        {role === "ADMIN" ? <p>Admin del sitio</p> : null}
      </ul>
    </Card>
  );
};

const SectionListsListCard = ({
  listName,
  desc,
  path,
  numBooks,
  publicList = false,
}) => {
  // TODO: Cuadrar esto con css grid para alegrar problemas de alineamiento
  const iconpath = publicList ? PublicListIcon : PrivateListIcon;
  const alticon = publicList
    ? "icono de lista de libros publica"
    : "icono de lista de libros privada";

  return (
    <Link to={path} className="listCard navHover">
      <span className="listCard__items">
        <img
          className="listCard-icon listCard--item"
          src={iconpath}
          alt={alticon}
        />
        <span>{listName}</span>
      </span>
      <span className="listCard--item">{desc}</span>
      <span className="listCard--item">{numBooks + " Libros"}</span>
    </Link>
  );
};

const SectionLists = ({ myLists }) => {
  if (myLists != null) {
    return (
      <Card h1Text="Mis listas" id="my-lists">
        {myLists.map((list) => {
          return (
            <SectionListsListCard
              key={list.id}
              listName={list.listName}
              path={`/book-lists/${list.id}`}
              desc={list.desc}
              numBooks={list.numBooks}
              publicList={list.publicList}
            />
          );
        })}
        <BtnAdd tolink="/new-list" />
      </Card>
    );
  }
};

const SectionDownloadsHistory = ({ historyBooks }) => {
  if (historyBooks != null) {
    return (
      <Card h1Text="Historial de descargas">
        <Slider books={historyBooks} />
      </Card>
    );
  }
};

const SectionUploadABook = () => {
  return (
    <Card h1Text="Subir un libro">
      <p>
        Contribuye con la comunidad añadiendo nuevos libros, click al boton para
        hacerlo
      </p>
      <BtnAdd tolink="/upload-book" />
    </Card>
  );
};

const SectionOtherOpts = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`/user`);
      handleLogout();
    } catch (error) {
      console.error("There was an error deleting the user!", error);
      alert("Error deleting user: " + error.message);
    }
  };

  const SectionOtherOptsOptions = [
    {
      toLink: "https://paypal.me/Joker222735?country.x=CO&locale.x=es_XC",
      iconPath: IconPaypal,
      text: "Donar",
    },

    {
      toLink: "/confirm-password",
      iconPath: IconEditDetails,
      text: "Editar mi información",
    },
    {
      toLink: "/changeEmail",
      iconPath: IconEditEmail,
      text: "Cambiar email",
    },
    {
      toLink: "/changePass",
      iconPath: IconShieldPass,
      text: "Cambiar contraseña",
    },
    {
      onClick: handleLogout,
      iconPath: IconLogout,
      text: "Cerrar sesión",
    },
    {
      onClick: handleDeleteUser,
      iconPath: IconDelAccount,
      text: "Eliminar cuenta",
    },
  ];

  return (
    <Card h1Text="Opciones">
      <DropMenu
        options={SectionOtherOptsOptions}
        cssClassContainer=" nonFloating"
      />
    </Card>
  );
};

const MyAccountAdmin = () => {
  const [report, setReport] = useState(["No hay reportes por el momento"]);
  useEffect(() => {
    getReportsApi()
      .then((res) => {
        setReport(res.data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const handleNoImplementada = async () => {
    alert("Funcionalidad no implementada aún");
  };

  return (
    <>
      <Card h1Text="Administrar libros" h1Center>
        <SearcherNoFilters
          // toNavigate="/results"
          onClick={handleNoImplementada}
        />
      </Card>
      <Card h1Text="Administrar usuarios" h1Center>
        <SearcherUsers
          holder="Buscar usuarios por id, nickname, nombre, email..."
          toNavigate="/results"
        />
      </Card>
      <Card h1Text="Reportes" h1Center>
        {report ? (
          report.map((report, index) => {
            return (
              <div className="report_div" key={index}>
                <h3>{`Id del usuario: ${report.idUser}`}</h3>
                <p>{report.motivation}</p>
                <p>{`Libro que reportado por el usuario: ${report.idBook}`}</p>
              </div>
            );
          })
        ) : (
          <p>No hay reportes por el momento</p>
        )}
      </Card>
    </>
  );
};

const LoggedAdmin = () => {
  const { user } = useAuth();
  if (user.role === "ADMIN") {
    return <MyAccountAdmin />;
  }
  return null;
};

// Main page
const MyAccount = () => {
  const auth = useAuth();
  const user = auth && auth.user;
  const [myBookLists, setMyBookLists] = useState([]);
  const [downloadHistoryBooks, setDownloadHistoryBooks] = useState([]);

  const userListsUrl = user ? `/book-lists/my-lists` : null;
  const downloadHistoryUrl = user ? `/user/download-history` : null;
  const {
    data: userListsData,
    isPending: userListsPending,
    error: userListsError,
  } = useFetch(userListsUrl);
  const {
    data: downloadHistoryData,
    isPending: downloadHistoryPending,
    error: downloadHistoryError,
  } = useFetch(downloadHistoryUrl);

  useEffect(() => {
    if (userListsData) {
      const filteredData = userListsData.data.map((list) => ({
        id: list.id,
        listName: list.title,
        desc: list.description,
        numBooks: list.bookCount,
        publicList: list.isPublic,
      }));
      setMyBookLists(filteredData); // Actualiza el estado con los datos filtrados
    }
  }, [userListsData]);

  useEffect(() => {
    if (downloadHistoryData) {
      const filteredData = downloadHistoryData.data.map((book) => ({
        bookId: book.bookId,
        title: book.title,
        author: book.author,
        pathBookCover: book.coverImgPath,
      }));
      setDownloadHistoryBooks(filteredData); // Actualiza el estado con los datos filtrados
    }
  }, [downloadHistoryData]);

  if (userListsPending || downloadHistoryPending) return <div>Loading...</div>;
  if (userListsError) return <div>Error: {userListsError}</div>;
  if (downloadHistoryError) return <div>Error: {downloadHistoryError}</div>;

  return (
    <>
      <SectionMyData
        name={user.fullName}
        nickname={user.nickname}
        email={user.email}
        country={user.country}
        registerDate={user.registerDate}
      />
      <LoggedAdmin />
      <SectionLists myLists={myBookLists} />
      <SectionDownloadsHistory historyBooks={downloadHistoryBooks} />
      <SectionUploadABook />
      <SectionOtherOpts />
    </>
  );
};
export default MyAccount;
