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
import ChangeUserDetails from "./pages/account/ChangeUserDetails.jsx";
import UserPassConf from "./pages/account/UserPassConf.jsx";

//layouts
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login /> /* <Home /> */} />
      <Route path="login" element={<Login />} />
      <Route path="new-account" element={<NewAccount />} />
      <Route path="recovery-account" element={<RecoveryAccount />} />
      <Route path="send-email" element={<SendEmail />} />
      <Route path="change-pass" element={<ChangePass />} />
      <Route path="confirm-password" element={<UserPassConf />} />
      <Route path="my-account" element={<MyAccount />} />
      <Route
        path="my-account/change-users-details"
        element={<ChangeUserDetails />}
      />
      <Route path="book-information" element={<BookInformation />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
