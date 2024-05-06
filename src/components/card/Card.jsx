import "./card.css";

const CardH1Logic = ({customH1, h1Center, h1ClassName, h1Text}) => {
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
  customCssClassesSection = "",
  customCssClasesH1 = "",
  id,
  h1Center = false,
  cardDialog = false,
  customH1 = false,
}) => {
  const h1ClassName = "card__h1 " + customCssClasesH1;
  const sectionClassName = "cardSection " + customCssClassesSection;

  return (
    <section
      id={id}
      className={
        cardDialog ? sectionClassName + " cardSection-dialog" : sectionClassName
      }
    >
      <CardH1Logic
        customH1={customH1}
        h1Center={h1Center}
        h1ClassName={h1ClassName}
        h1Text={h1Text}
      />
      {children}
    </section>
  );
};
export default Card;
