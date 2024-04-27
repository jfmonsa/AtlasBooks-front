const BtnAdd = ({tolink}) => {
  return (
    <PrimaryBtnLink tolink={tolink} cssClasses="btn-add">
      <img src={BtnIconAdd} alt="Add a book icon for button" />
    </PrimaryBtnLink>
  );
};

export default BtnAdd;
