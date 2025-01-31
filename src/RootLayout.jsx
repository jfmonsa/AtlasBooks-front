import { Header } from "@components/common/Header/Header.jsx";
import { Footer } from "@components/common/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
