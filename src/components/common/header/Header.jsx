import "./Header.sass"
import logo_Atlas from "../../../assets/logo_Atlas.svg"
import icon_menu from "../../../assets/icons/Icon-menu.svg"
import icon_donar from "../../../assets/icons/Icon-donar.svg"

const Header = () => {
    return(
        <header className = "navbar" >

            <img src={logo_Atlas} alt="" className="logo" />

            
            <img src={icon_donar} alt="" className="donar" />
            

            <ul>
                <li>Mi Perfil</li>
            </ul>

            <img src={icon_menu} alt="" className="burguer" />
                
        </header>
    )
}

export default Header