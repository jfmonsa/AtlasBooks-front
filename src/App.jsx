import { createBrowserRouter, RouterProvider } from "react-router-dom";

//contexts
import { ChangePassProvider } from "./contexts/ChangePassContext.jsx";
import { ChangeEmailProvider } from "./contexts/ChangeEmailContext.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import { ProtectedRoute } from "./components/protectedRoutes/ProtectedRoute.jsx";

//pages
import Home from "./pages/home/Home.jsx";
import BookSearchResults from "./pages/bookSearchResults/bookSearchResults.jsx";
import UploadBook from "./pages/uploadBook/UploadBook.jsx";
import NewList from "./pages/myaccount/NewList.jsx";

//Login related and recovery account
import { LoginPage } from "./modules/auth/views/LoginPage.jsx";
import { RegisterPage } from "./modules/auth/views/RegisterPage.jsx";
import { RecoveryAccountPage } from "./modules/auth/views/RecoveryAccountPage.jsx";
import { ReceivedEmailRecoveryPassword } from "./modules/auth/views/ReceivedEmailRecoveryPassword.jsx";
import { ChangePasswordPage } from "./modules/auth/views/ChangePasswordPage.jsx";
import { BookDetailsPage } from "./pages/bookInformation/BookDetailsPage.jsx";
import { ReceivedEmailChangeEmailPage } from "./modules/auth/views/ReceivedEmailChangeEmailPage.jsx";
import { ChangeEmailPage } from "./modules/auth/views/ChangeEmailPage.jsx";
import { NewPasswordRecoveryPage } from "./modules/auth/views/NewPasswordRecoveryPage.jsx";

//My Account related
import MyAccount from "./pages/myaccount/MyAccount.jsx";
import AdminResults from "./pages/myaccount/AdminResults.jsx";
import ChangeUserDetails from "./pages/myaccount/ChangeUserDetails.jsx";
import Lists from "./pages/myaccount/Lists.jsx";
import ListSearch from "./pages/Lists/myLists.jsx";
import Report from "./pages/bookInformation/Report.jsx";
import PasswordConfirm from "./components/passwordConfirm/PasswordConfirm.jsx";
import Recommended from "./pages/recommended/Recommended.jsx";
import DiscoverList from "./pages/discoverList/DiscoverList.jsx";
import Categories from "./pages/categories/Categories.jsx";
//layouts
import RootLayout from "./RootLayout.jsx";

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
        element: <LoginPage />,
      },
      {
        path: "new-account",
        element: <RegisterPage />,
      },
      {
        path: "recovery-account",
        element: <RecoveryAccountPage />,
      },
      {
        path: "send-email",
        element: <ReceivedEmailRecoveryPassword />,
      },
      {
        path: "changePass",
        element: (
          <ProtectedRoute>
            <ChangePasswordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-account",
        element: (
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: "book-lists/:idList",
        element: <Lists />,
      },
      {
        path: "lists-results",
        element: (
          <ProtectedRoute>
            <ListSearch />
          </ProtectedRoute>
        ),
      },
      {
        path: "confirm-password",
        element: (
          <ProtectedRoute>
            <PasswordConfirm />
          </ProtectedRoute>
        ),
      },
      {
        path: "users-details",
        element: (
          <ProtectedRoute>
            <ChangeUserDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "upload-book",
        element: (
          <ProtectedRoute>
            <UploadBook />
          </ProtectedRoute>
        ),
      },
      {
        path: "new-list",
        element: (
          <ProtectedRoute>
            <NewList />
          </ProtectedRoute>
        ),
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
        path: "report/:id",
        element: <Report />,
      },
      {
        path: "books/:id",
        element: <BookDetailsPage />,
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
        path: "user-results",
        element: <AdminResults />,
      },
      {
        path: "received-email/:token",
        element: <ReceivedEmailChangeEmailPage />,
      },
      {
        path: "changeEmail",
        element: (
          <ProtectedRoute>
            <ChangeEmailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "newPassword/:token",
        element: <NewPasswordRecoveryPage />,
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
