import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
// import "./app.sass"
import { Login } from "./pages/account/Login.jsx"
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx"
import SendEmail from "./pages/account/SendEmail.jsx"


const App = () => {
  return(
    <>

      <Header/>
      <Login/>
      {/* <RecoveryAccount/> */}
      {/* <SendEmail/> */}
      <Footer/>

    </>
  );
}

export default App
