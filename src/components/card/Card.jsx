import "./card.css";

const Card = props => {
  const h1_className = "card__h1 ";

  return (
    <section className="cardSection">
      <h1
        className={
          props.h1_center ? h1_className + "card__h1--center" : h1_className
        }
      >
        {props.h1_text}
      </h1>
      {props.children}
    </section>
  );
};
export default Card;
