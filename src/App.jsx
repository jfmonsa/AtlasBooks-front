import {Route, Routes} from "react-router-dom";
import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import Login from "./pages/account/Login.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";
import BookInformation from "./pages/bookInformation/BookInformation.jsx";
import RateStars from "./components/rate-stars/RateStars.jsx";
import MyAccount from "./pages/myaccount/MyAccount.jsx";

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
          <Route path="/my-account" element={<MyAccount />} />
          <Route
            path="/my-account/change-users-details"
            element={<MyAccount />}
          />
          <Route path="/book-information" element={<BookInformation />} />
        </Routes>
        {/* <Recommended /> */}
        {/* <MyAccount /> */}
        {/*<RateStars/> */}
        {/* <Searcher type={"text"} holder={SEARCH} /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
