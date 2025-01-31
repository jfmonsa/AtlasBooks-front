import "./BtnAdd.css";
import BtnIconAdd from "./btnIcon-add.svg";
import { PrimaryBtnLink } from "@/components/PrimaryBtn/PrimaryBtnLink";

export function BtnAdd({ tolink }) {
  return (
    <PrimaryBtnLink tolink={tolink} cssClasses="btn-add">
      <img src={BtnIconAdd} alt="Add a book icon for button" />
    </PrimaryBtnLink>
  );
}
