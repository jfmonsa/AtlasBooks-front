import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";

import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {EMAIL, NAME} from "../../utils/placeholder.js";

const ChangeUserDetails = () => {
  return (
    <Card h1_text="Edita tus detalles" h1_center={true}>
      <form method="post" action="/my-account">
        <InputText
          text="Nuevo email"
          type="email"
          holder={EMAIL}
          typecss="access"
        ></InputText>
        <InputText
          text="Nuevo email"
          type="email"
          typecss="access"
          holder={EMAIL}
        ></InputText>
        <PrimaryBtnForm cssClasses="black1Btn" />
      </form>
    </Card>
  );
};

export default ChangeUserDetails;
