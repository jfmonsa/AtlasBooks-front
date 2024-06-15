import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";

import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {EMAIL, NAME} from "../../utils/placeholder.js";

//TODO: hacer el handle sumbit de ChangeUserDetails

const ChangeUserDetails = () => {
  return (
    <Card cardDialog h1_text="Edita tus detalles" h1_center={true}>
      <form method="post" action="/my-account">
        <InputText
          text="Nombre de usuario"
          type="text"
          holder={NAME}
          typecss="access"
        />
        <InputText
          text="Nuevo email"
          type="email"
          holder={EMAIL}
          typecss="access"
        />
        <InputText
          text="Nuevo email"
          type="email"
          typecss="access"
          holder={EMAIL}
        />
        <PrimaryBtnForm
          text="Editar detalles"
          cssClasses="formCustomBtn black2Btn"
        />
      </form>
    </Card>
  );
};

export default ChangeUserDetails;
