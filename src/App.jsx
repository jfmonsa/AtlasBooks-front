import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
// import "./app.sass"
import { Login } from "./pages/account/Login.jsx"
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx"
import SendEmail from "./pages/account/SendEmail.jsx"
import NewAccount from "./pages/account/NewAccount.jsx"
import ChangePass from "./pages/account/ChangePass.jsx"

/*
TODO:
+ Estadarizar codigo, configurar una configuración comun para el formatedo del codigo
+ Una hu para revisar ciertos estilos del css, impresisiones respecto al diseño del figma
*/
const App = () => {
  return(
    <>
      <Header/>
      <Login/>
      {/* <NewAccount/>  */}
      {/* <RecoveryAccount/> */}
      {/* <SendEmail/> */}
      {/* <ChangePass/> */}
      <Footer/>

    </>
  );
}

export default App
