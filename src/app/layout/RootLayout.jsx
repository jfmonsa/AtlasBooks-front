import { Header } from "@/app/layout/Header/Header.jsx";
import { Footer } from "@/app/layout/Footer/Footer.jsx";
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
