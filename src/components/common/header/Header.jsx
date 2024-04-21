import "./Header.sass"
import logo_Atlas from "../../../assets/logo_Atlas.svg"
import { useState } from "react"

const Header = () => {

    const[isOpen, setIsOpen] = useState(false)
    
    const setOpenedState = () => {
        let reverseOpened = isOpen

        setIsOpen(!reverseOpened)
    }

    return(
        <div className = "navbar" >

            <img src={logo_Atlas} alt="" className="logo" />

            <div className="Elements-right">

                <button className="button-donar">Donar</button>
        
                {/* <a>Registrarse</a> */}
                {/* <a>Iniciar Sesion</a> */}
                <a>Mi Perfil</a>

                <div className = {isOpen ? 'menu-button-opened' : 'menu-button'} onClick={() => setOpenedState()}> 
                    <div className= 'menu-button-burger'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header