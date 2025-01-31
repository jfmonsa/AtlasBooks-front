import { Card } from "@components/Card/Card.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";

import { EMAIL, NAME } from "@utils/placeholder.js";

// TODO: make handle submit for this wtf
export function ChangeUserDetails() {
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
}
