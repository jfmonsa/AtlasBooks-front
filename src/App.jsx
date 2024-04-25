import {Route, Routes} from "react-router-dom";
import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import Login from "./pages/account/Login.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";
import RateStars from "./components/rate-stars/RateStars.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-account" element={<NewAccount />} />
          <Route path="/recovery-account" element={<RecoveryAccount />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/change-pass" element={<ChangePass />} />
        </Routes>

        {/*<RateStars/> */}
        {/* <Searcher type={"text"} holder={SEARCH} /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
