import "./myaccount.css";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Slider from "../../components/slider/Slider.jsx";
import Card from "../../components/card/Card.jsx";
import {Link,useNavigate} from "react-router-dom";
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
import SearcherNoFilters from "../../components/searcher/SearcherNoFilters.jsx";

//imgs para libros
//TODO: reeemplzarlas por unas alamacenadas en el backend
import Imagen1 from "../../assets/img/image1.png";
import Imagen2 from "../../assets/img/image2.png";
import Imagen3 from "../../assets/img/image3.png";
import Imagen4 from "../../assets/img/image4.png";
import Imagen5 from "../../assets/img/image5.png";
import {  useAuth } from "../../contexts/authContext.jsx";

// Aux functions
const SectionMyDataDatum = ({left, right}) => {
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
  isAdmin,
  pathProfilePic = null,
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
        {isAdmin ? <p>Admin del sitio</p> : null}
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

const SectionLists = ({myLists}) => {
  if (myLists != null) {
    return (
      <Card h1Text="Mis listas" id="my-lists">
        {myLists.map((list, index) => {
          return (
            <SectionListsListCard
              key={index}
              listName={list.listName}
              path={list.path}
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

const SectionDownloadsHistory = ({historyBooks}) => {
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

const SectionOtherOptsOpt = ({text, toLink, iconSrc}) => {
  return (
    <li>
      <Link to={toLink} className="options navHover">
        <img
          src={iconSrc}
          alt={`icono opción ${text}`}
          className="options__icon"
        />
        <span>{text}</span>
      </Link>
    </li>
  );
};

const SectionOtherOpts = () => {
  const navigate = useNavigate();
 const {logout} = useAuth();
  const SectionOtherOptsOptions = [
    {
      toLink: "#", 
      iconPath: IconPaypal, 
      text: "Donar"},
    
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
      toLink: "/confirm-password",
      iconPath: IconDelAccount,
      text: "Eliminar cuenta",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const onClickOptions = [
      {
        onClick: handleLogout,
        iconPath: IconLogout, 
        text: "Cerrar sesión"},
    
  ]
  
  return (
    <Card h1Text="Opciones">
    
      <DropMenu 
        customOnclickOptions={onClickOptions}
        options={SectionOtherOptsOptions}
        cssClassContainer=" nonFloating"
      />
    </Card>
  );
};

const MyAccountAdmin = () => {
  return (
    <>
      <Card h1Text="Administrar libros" h1Center>
        <SearcherNoFilters toNavigate="/results" />
      </Card>
      <Card h1Text="Administrar usuarios" h1Center>
        <SearcherNoFilters holder="Buscar usuarios" toNavigate="/results" />
      </Card>
      <Card h1Text="Administrar reportes" h1Center></Card>
    </>
  );
};

const LoggedAdmin = () => {
  const {contextValue} = useAuth()
  const context = contextValue;
  if (context.admin) {
    return <MyAccountAdmin />;
  }
};

// Aux Test data
const myBookLists = [
  {
    listName: "Mis Favoritos",
    desc: "Lista de mis libros favoritos :3",
    numBooks: 23,
    path: "/my-lists",
    publicList: true,
  },
  {
    listName: "Clasicos de literatura",
    desc: "No description",
    numBooks: 13,
    path: "/my-lists",
    publicList: true,
  },
  {
    listName: "Libros de la Universidad",
    desc: "Libros de toda la carrera",
    numBooks: 16,
    path: "/my-lists",
    publicList: false,
  },
];

const downloadHistoryBooks = [
  {
    author: "Pepito Perez",
    title: "Pepe tenia una pipa",
    pathBookCover: Imagen1,
  },
  {
    author: "Gogó manotas",
    title: "Bases de datos relacionales",
    pathBookCover: Imagen2,
  },
  {
    author: "Carlos Delgado",
    title: "Salem's lot",
    pathBookCover: Imagen3,
  },
  {
    author: "Jaimito el Carterito",
    title: "Odio al chavo",
    pathBookCover: Imagen4,
  },
  {
    author: "Karl Marx",
    title: "Das Kapital",
    pathBookCover: Imagen5,
  },
];



// Main page
const MyAccount = () => {

  const {user} = useAuth();

  return (
    <>
      <SectionMyData
        name= {user.name}
        nickname= {user.nickname}
        email= {user.email}
        country= {user.country}
        registerDate= {user.registerDate.split("T")[0]}
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
