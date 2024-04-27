import "./BookInformation.sass"
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare"
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload"
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser"

const BookInformation = () => {
  return (
    <section>
      <div>BookInformation</div>
      <div className="Buttons">
        <DropDownButtonDescarga/>
        <DropDownButtonCompartir/>
        <DropDownButtonListUser/>
      </div>
    </section>
  )
}

export default BookInformation