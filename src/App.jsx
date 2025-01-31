import { createBrowserRouter, RouterProvider } from "react-router-dom";

//contexts
import { ChangePassProvider } from "./contexts/ChangePassContext.jsx";
import { ChangeEmailProvider } from "./contexts/ChangeEmailContext.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoutes/ProtectedRoute.jsx";

// pages
import { HomePage } from "@/modules/home/pages/HomePage/HomePage.jsx";
import { BookSearchResultsPage } from "@/modules/search/pages/BookSearchResultsPage/BookSearchResultsPage.jsx";
import { UploadBookPage } from "@/modules/create-book/pages/UploadBookPage/UploadBookPage.jsx";
import { NewListPage } from "@/modules/my-account/pages/NewListPage/NewListPage.jsx";
import { ChangePasswordPage } from "@/modules/auth/pages/ChangePasswordPage.jsx";
import { BookDetailsPage } from "@/modules/book/pages/BookDetailsPage/BookDetailsPage.jsx";

// -> auth related pages
import { LoginPage } from "@/modules/auth/pages/LoginPage.jsx";
import { RegisterPage } from "@/modules/auth/pages/RegisterPage.jsx";
import { RecoveryAccountPage } from "@/modules/auth/pages/RecoveryAccountPage.jsx";
import { ReceivedEmailRecoveryPassword } from "@/modules/auth/pages/ReceivedEmailRecoveryPassword.jsx";
import { ReceivedEmailChangeEmailPage } from "@/modules/auth/pages/ReceivedEmailChangeEmailPage.jsx";
import { ChangeEmailPage } from "@/modules/auth/pages/ChangeEmailPage.jsx";
import { NewPasswordRecoveryPage } from "@/modules/auth/pages/NewPasswordRecoveryPage.jsx";

//My Account related
import { MyAccountPage } from "@/modules/my-account/pages/MyAccountPage/MyAccountPage.jsx";
import { ChangeUserDetails } from "@/modules/my-account/components/ChangeUserDetails.jsx";
import { Lists } from "@/modules/my-account/components/Lists.jsx";
import { MyListsPage } from "@/modules/lists/pages/MyListsPage/MyListsPage.jsx";
import { ReportBookPage } from "@/modules/book/pages/ReportBookPage.jsx";
import { ConfirmPassword } from "@/components/ConfirmPassword/ConfirmPassword.jsx";
import { DiscoverListPage } from "@/modules/lists/pages/DiscoverListPage/DiscoverListPage.jsx";
import { SearchByCategoryPage } from "@/modules/search/pages/SearchByCategoryPage/SearchByCategoryPage.jsx";

//layouts
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
            <MyAccountPage />
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
            <MyListsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "confirm-password",
        element: (
          <ProtectedRoute>
            <ConfirmPassword />
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
            <UploadBookPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "new-list",
        element: (
          <ProtectedRoute>
            <NewListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "search-results",
        element: <BookSearchResultsPage />,
      },
      {
        path: "report/:id",
        element: <ReportBookPage />,
      },
      {
        path: "books/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "categories",
        element: <SearchByCategoryPage />,
      },
      {
        path: "discover-list",
        element: <DiscoverListPage />,
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
