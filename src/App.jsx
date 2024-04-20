import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
import "./app.sass"
import { Login } from "./components/common/login/Login.jsx";

function App() {
  return(
    <>
    <Header></Header>
    <Footer></Footer>
    <div className="App"><Login/></div>
    
    </>
  );
}

export default App
