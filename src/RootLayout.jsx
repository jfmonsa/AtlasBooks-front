import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
