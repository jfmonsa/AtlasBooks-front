import "./card.css";

const Card = props => {
  const h1_className = "card__h1 ";
  const section_className = "cardSection";

  return (
    <section
      className={
        props.cardDialog
          ? section_className + " cardSection-dialog"
          : section_className
      }
    >
      <h1
        className={
          props.h1_center ? h1_className + " card__h1--center" : h1_className
        }
        id={props.id}
      >
        {props.h1_text}
      </h1>
      {props.children}
    </section>
  );
};
export default Card;
