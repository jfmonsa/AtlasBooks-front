import "./MyAccountPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth.js";
import useFetch from "@hooks/useFetch.js";
import { AtlasBooksAPIClient } from "@lib/api-client.js";
import { getReports } from "../../services/get-reports.service.js";

// components
import { BtnAdd } from "../../components/BtnAdd/BtnAdd.jsx";
import { DropMenu } from "@components/DropMenu/DropMenu.jsx";
import { Slider } from "@components/Slider/Slider.jsx";
import { Card } from "@components/Card/Card.jsx";
// -> for admin
import { SearcherUsers } from "@components/Searcher/SearcherUsers.jsx";
import { SearcherNoFilters } from "@components/Searcher/SearcherNoFilters.jsx";

// icons
import IconLogout from "@assets/icons/menu-logout.svg";
import IconPaypal from "@assets/icons/icon-paypal.svg";
import IconEditEmail from "../../assets/icon-edit-email.svg";
import IconEditDetails from "../../assets/icon-edit-details.svg";
import IconShieldPass from "../../assets/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icon-delaccount.svg";
// -> for my lists section
import PrivateListIcon from "../../assets/icon-privatelist.svg";
import PublicListIcon from "../../assets/icon-publiclist.svg";

export function MyAccountPage() {
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

  /** fetch user lists */
  useEffect(() => {
    if (userListsData) {
      const filteredData = userListsData.data.map((list) => ({
        id: list.id,
        listName: list.title,
        desc: list.description,
        numBooks: list.bookCount,
        publicList: list.isPublic,
      }));
      setMyBookLists(filteredData);
    }
  }, [userListsData]);

  /** fetch download history */
  useEffect(() => {
    if (downloadHistoryData) {
      const filteredData = downloadHistoryData.data.map((book) => ({
        bookId: book.bookId,
        title: book.title,
        author: book.author,
        pathBookCover: book.coverImgPath,
      }));
      setDownloadHistoryBooks(filteredData);
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
}

// Aux components
function SectionMyDataDatum({ left, right }) {
  return (
    <li className="card-myData">
      <span className="card-myData__left">{left}</span>
      <span className="card-myData__right">{right}</span>
    </li>
  );
}

function SectionMyData({ name, nickname, email, country, registerDate, role }) {
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
}

function SectionListsListCard({
  listName,
  desc,
  path,
  numBooks,
  publicList = false,
}) {
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
}

export function SectionLists({ myLists }) {
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
}

export function SectionDownloadsHistory({ historyBooks }) {
  if (historyBooks != null) {
    return (
      <Card h1Text="Historial de descargas">
        <Slider books={historyBooks} />
      </Card>
    );
  }
}

function SectionUploadABook() {
  return (
    <Card h1Text="Subir un libro">
      <p>
        Contribuye con la comunidad añadiendo nuevos libros, click al boton para
        hacerlo
      </p>
      <BtnAdd tolink="/upload-book" />
    </Card>
  );
}

function SectionOtherOpts() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDeleteUser = async () => {
    try {
      await AtlasBooksAPIClient.delete(`/user`);
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
      toLink: "/change-email",
      iconPath: IconEditEmail,
      text: "Cambiar email",
    },
    {
      toLink: "/change-passwordsword",
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
}

function MyAccountAdmin() {
  const [report, setReport] = useState(["No hay reportes por el momento"]);
  useEffect(() => {
    getReports()
      .then((reports) => {
        setReport(reports);
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
}

const LoggedAdmin = () => {
  const { user } = useAuth();
  if (user.role === "ADMIN") {
    return <MyAccountAdmin />;
  }
  return null;
};
