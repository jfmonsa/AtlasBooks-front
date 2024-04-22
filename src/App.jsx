import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import {Login} from "./pages/account/Login.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";

/*
TODO:
+ Estadarizar codigo, configurar una configuración comun para el formatedo del codigo
*/
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Login />
        {/* <NewAccount/>  */}
        {/* <RecoveryAccount/> */}
        {/* <SendEmail/> */}
        {/* <ChangePass/> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
