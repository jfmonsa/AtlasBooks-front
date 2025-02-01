import "./PopUp.css";
import { useState } from "react";

export function PopUp() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => setIsOpen(false);

  if (!isOpen) return;

  return (
    <div className="feedback-popup">
      <h3>¡Tu opinión nos importa!</h3>
      <p>¿Te gustaría responder una breve encuesta sobre tu experiencia?</p>

      {/* Contenedor para los botones */}
      <div className="feedback-popup-buttons">
        {/* Botón de ir al formulario */}
        <button
          className="gradient-button"
          onClick={() =>
            window.open("https://forms.gle/eC3DuiEaWggtBau66", "_blank")
          }
        >
          <span>Ir al formulario</span>
        </button>

        {/* Botón de cerrar */}
        <button className="close-button" onClick={closePopup}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
