import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/home/Home.jsx";

//Login related and recovery account
import {Login} from "./pages/account/Login.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";
import BookInformation from "./pages/bookInformation/BookInformation.jsx";
//My Account related
import MyAccount from "./pages/myaccount/MyAccount.jsx";
import AdminResults from "./pages/myaccount/AdminResults.jsx";
import ChangeUserDetails from "./pages/myaccount/ChangeUserDetails.jsx";
// import UserPassConf from "./pages/myaccount/UserPassConf.jsx";
// import Report from "./pages/account/Report.jsx";

//layouts
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      {/* Login related and recovery account */}
      <Route path="login" element={<Login />} />
      <Route path="new-account" element={<NewAccount />} />

      {/* --- Routing recovery account */}
      <Route path="recovery-account" element={<RecoveryAccount />} />
      <Route path="send-email" element={<SendEmail />} />
      <Route path="change-pass" element={<ChangePass />} />

      {/* Routing for edit details in my account */}
      {/* TODO: change path for user/id_del_user */}
      <Route path="my-account" element={<MyAccount />} />
      {/* <Route path="confirm-password" element={<UserPassConf />} /> */}
      <Route path="users-details" element={<ChangeUserDetails />} />
      {/* <Route path="recommended" /> */}
      {/* <Route path="lists">
          Aquí iría cada lista que tenga el usuario
        </Route>*/}
      {/* TODO: change path for book/id_del_libro */}
      {/* <Route path="Report" element={<Report />} /> */}
      <Route path="book-information" element={<BookInformation />} />
      {/* <Route path="categories" element={<BookInformation />} /> */}

      {/* Routes for admin */}
      <Route path="results" element={<AdminResults />} />
      {/* <Route path="*" element={<NoFound404 />} /> */}
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
