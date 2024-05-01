import "./card.css";

const Card = ({
  h1Text,
  children,
  customCssClassesSection = "",
  customCssClasesH1 = "",
  id,
  h1Center = false,
  cardDialog = false,
}) => {
  const h1ClassName = "card__h1 " + customCssClasesH1;
  const sectionClassName = "cardSection " + customCssClassesSection;

  return (
    <section
      className={
        cardDialog ? sectionClassName + " cardSection-dialog" : sectionClassName
      }
    >
      <h1
        className={h1Center ? h1ClassName + " card__h1--center" : h1ClassName}
        id={id}
      >
        {h1Text}
      </h1>
      {children}
    </section>
  );
};
export default Card;
