import "./iconDropDown.css";
import DropMenu from "../../components/dropMenu/DropMenu.jsx";

const IconDropDown = ({
  altText,
  iconPath,
  options,
  cssClassContainer,
  cssClassIcon,
  menuContainerCssClass,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      className={cssClassContainer}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <img className={cssClassIcon} src={iconPath} alt={altText} />
      {open && (
        <DropMenu options={options} cssClassContainer={menuContainerCssClass} />
      )}
    </span>
  );
};
export default IconDropDown;
