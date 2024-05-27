import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useContext} from "react";

//contexts
import {ChangePassProvider} from "./contexts/ChangePassContext.jsx";
import {ChangeEmailProvider} from "./contexts/ChangeEmailContext.jsx";
import LoginContext from "./contexts/LoginContext.jsx";
import {AuthProvider} from "./contexts/authContext.jsx";

//pages
import Home from "./pages/home/Home.jsx";
import Error from "./pages/error/Error.jsx";
import BookSearchResults from "./pages/bookSearchResults/bookSearchResults.jsx";
import UploadBook from "./pages/myaccount/UploadBook.jsx";
import NewList from "./pages/myaccount/NewList.jsx";

//Login related and recovery account
import {Login} from "./pages/account/Login.jsx";
import NewAccount from "./pages/account/NewAccount.jsx";
import RecoveryAccount from "./pages/account/RecoveryAccount.jsx";
import SendEmail from "./pages/account/SendEmail.jsx";
import ChangePass from "./pages/account/ChangePass.jsx";
import BookInformation from "./pages/bookInformation/BookInformation.jsx";
import ReceivedEmail from "./pages/account/ReceivedEmail.jsx";
import ChangeEmail from "./pages/account/ChangeEmail.jsx";

//My Account related
import MyAccount from "./pages/myaccount/MyAccount.jsx";
import AdminResults from "./pages/myaccount/AdminResults.jsx";
import ChangeUserDetails from "./pages/myaccount/ChangeUserDetails.jsx";
import Lists from "./pages/myaccount/Lists.jsx";
import Report from "./pages/bookInformation/Report.jsx";
import PasswordConfirm from "./components/passwordConfirm/PasswordConfirm.jsx";
import Recommended from "./pages/recommended/Recommended.jsx";
import DiscoverList from "./pages/discoverList/DiscoverList.jsx";
import Categories from "./pages/categories/Categories.jsx";
//layouts
import RootLayout from "./RootLayout.jsx";

const LoggedAdminRouting = () => {
  const context = useContext(LoginContext());

  if (context.admin) return <AdminResults />;
  else return <Error />;
};

const LoggedRouting = () => {
  const context = useContext(LoginContext());

  if (context.logged) return <MyAccount />;
  else return <Error />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "new-account",
        element: <NewAccount />,
      },
      {
        path: "recovery-account",
        element: <RecoveryAccount />,
      },
      {
        path: "send-email",
        element: <SendEmail />,
      },
      {
        path: "changePass",
        element: <ChangePass />,
      },
      {
        path: "my-account",
        element: <LoggedRouting />,
      },
      {
        path: "my-lists/:idList",
        element: <Lists />,
      },
      {
        path: "confirm-password",
        element: <PasswordConfirm />,
      },
      {
        path: "users-details",
        element: <ChangeUserDetails />,
      },
      {
        path: "upload-book",
        element: <UploadBook />,
      },
      {
        path: "new-list",
        element: <NewList />,
      },
      {
        path: "recommended",
        element: <Recommended />,
      },
      {
        path: "search-results",
        element: <BookSearchResults />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "book-information",
        element: <BookInformation />,
      },
      {
        path: "books/:id",
        element: <BookInformation />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "discover-list",
        element: <DiscoverList />,
      },
      {
        path: "results",
        element: <LoggedAdminRouting />,
      },
      {
        path: "received-email/:token",
        element: <ReceivedEmail />,
      },
      {
        path: "changeEmail",
        element: <ChangeEmail />,
      },
      // {
      //   path: "*",
      //   element: <NoFound404 />,
      // },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <ChangeEmailProvider>
        <ChangePassProvider>
          <RouterProvider router={router} />
        </ChangePassProvider>
      </ChangeEmailProvider>
    </AuthProvider>
  );
};

export default App;
