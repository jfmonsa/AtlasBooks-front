import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Login from "./pages/account/Login.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";
import BookInformation from "./pages/bookInformation/BookInformation.jsx";
import MyAccount from "./pages/myaccount/MyAccount.jsx";
import ChangeUserDetails from "./pages/myaccount/ChangeUserDetails.jsx";
import UserPassConf from "./pages/myaccount/UserPassConf.jsx";

//layouts
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login /> /* <Home /> */} />
      <Route path="login" element={<Login />} />
      <Route path="new-account" element={<NewAccount />} />
      <Route path="recovery-account" element={<RecoveryAccount />}>
        {/* TODO: falta esta pagina ._. */}
        {/* <Route path="enter-your-email" element={} /> */}
        <Route path="send-email" element={<SendEmail />} />
        <Route path="change-pass" element={<ChangePass />} />
      </Route>
      {/* TODO: change path for user/id_del_user */}
      <Route path="my-account" element={<MyAccount />}>
        <Route path="edit/confirm-password" element={<UserPassConf />} />
        <Route path="edit/users-details" element={<ChangeUserDetails />} />
        {/* <Route path="recommended" /> */}
        {/* <Route path="lists">
          Aquí iría cada lista que tenga el usuario
        </Route>*/}
      </Route>
      {/* TODO: change path for book/id_del_libro */}
      <Route path="book-information" element={<BookInformation />} />
      {/* <Route path="categories" element={<BookInformation />} /> */}
      {/* <Route path="*" element={<NoFound404 />} /> */}
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
