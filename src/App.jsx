import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
import "./app.sass"
import { Login } from "./components/common/login/Login.jsx";

const App = () => {
  return(
    <>
      <Header ></Header>
      <Footer></Footer>
       <Login/>
    </>
  );
}

export default App
