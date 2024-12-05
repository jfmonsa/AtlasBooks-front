import "./card.css";

const CardH1Logic = ({ customH1, h1Center, h1ClassName, h1Text }) => {
  if (!customH1) {
    return (
      <h1
        className={h1Center ? h1ClassName + " card__h1--center" : h1ClassName}
      >
        {h1Text}
      </h1>
    );
  }
  return null;
};

const Card = ({
  h1Text,
  children,
  id,
  h1Center = false,
  cardDialog = false,
  customH1 = false,
  notFullWidth = false,
}) => {
  const h1ClassName = "card__h1 ";
  const sectionClassName = `cardSection 
  ${notFullWidth ? "cardSection--notFullWidth" : ""} 
  ${cardDialog ? "cardSection-dialog" : ""}`;

  return (
    <section id={id} className={sectionClassName}>
      <div className="cardSection__childrenContainer">
        <CardH1Logic
          customH1={customH1}
          h1Center={h1Center}
          h1ClassName={h1ClassName}
          h1Text={h1Text}
        />
        {children}
      </div>
    </section>
  );
};
export default Card;
