import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { HomePage } from "@/features/home/pages/HomePage/HomePage.jsx";
import { BookSearchResultsPage } from "@/features/search/pages/BookSearchResultsPage/BookSearchResultsPage.jsx";
import { UploadBookPage } from "@/features/create-book/pages/UploadBookPage/UploadBookPage.jsx";
import { NewListPage } from "@/features/my-account/pages/NewListPage/NewListPage.jsx";
import { ChangePasswordPage } from "@/features/auth/pages/ChangePasswordPage.jsx";
import { BookDetailsPage } from "@/features/book/pages/BookDetailsPage/BookDetailsPage.jsx";

// -> auth related pages
import { LoginPage } from "@/features/auth/pages/LoginPage.jsx";
import { RegisterPage } from "@/features/auth/pages/RegisterPage.jsx";
import { RecoveryAccountPage } from "@/features/auth/pages/RecoveryAccountPage.jsx";
import { ReceivedEmailRecoveryPassword } from "@/features/auth/pages/ReceivedEmailRecoveryPassword.jsx";
import { ReceivedEmailChangeEmailPage } from "@/features/auth/pages/ReceivedEmailChangeEmailPage.jsx";
import { ChangeEmailPage } from "@/features/auth/pages/ChangeEmailPage.jsx";
import { NewPasswordRecoveryPage } from "@/features/auth/pages/NewPasswordRecoveryPage.jsx";

// -> list related pages
import { BookListByIdPage } from "@/features/lists/pages/BookListById/BookListByIdPage.jsx";
import { MyListsPage } from "@/features/lists/pages/MyListsPage/MyListsPage.jsx";
import { DiscoverListPage } from "@/features/lists/pages/DiscoverListPage/DiscoverListPage.jsx";

//My Account related
import { MyAccountPage } from "@/features/my-account/pages/MyAccountPage/MyAccountPage.jsx";
import { ChangeUserDetailsPage } from "@/features/my-account/pages/ChangeUserDetailsPage.jsx";
import { ReportBookPage } from "@/features/book/pages/ReportBookPage.jsx";
import { ConfirmPassword } from "@/features/my-account/pages/ConfirmPassword/ConfirmPassword.jsx";
import { SearchByCategoryPage } from "@/features/search/pages/SearchByCategoryPage/SearchByCategoryPage.jsx";
import { AdminUserSearchResultsPage } from "@/features/my-account/pages/AdminUserSearchResultsPage/AdminUserSearchResultsPage.jsx";

import { AuthenticatedRouteGuard } from "@components/AuthenticatedRouteGuard/AuthenticatedRouteGuard.jsx";
import RootLayout from "@/app/layout/RootLayout.jsx";

const routerRoutes = createBrowserRouter([
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
        path: "change-password",
        element: (
          <AuthenticatedRouteGuard>
            <ChangePasswordPage />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "my-account",
        element: (
          <AuthenticatedRouteGuard>
            <MyAccountPage />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "book-lists/:idList",
        element: <BookListByIdPage />,
      },
      {
        path: "lists-results",
        element: (
          <AuthenticatedRouteGuard>
            <MyListsPage />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "confirm-password",
        element: (
          <AuthenticatedRouteGuard>
            <ConfirmPassword />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "users-details",
        element: (
          <AuthenticatedRouteGuard>
            <ChangeUserDetailsPage />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "upload-book",
        element: (
          <AuthenticatedRouteGuard>
            <UploadBookPage />
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "new-list",
        element: (
          <AuthenticatedRouteGuard>
            <NewListPage />
          </AuthenticatedRouteGuard>
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
        path: "admin/user-search-results",
        element: (
          <AuthenticatedRouteGuard>
            <AdminUserSearchResultsPage />,
          </AuthenticatedRouteGuard>
        ),
      },
      {
        path: "received-email/:token",
        element: <ReceivedEmailChangeEmailPage />,
      },
      {
        path: "change-email",
        element: (
          <AuthenticatedRouteGuard>
            <ChangeEmailPage />
          </AuthenticatedRouteGuard>
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

export function AppRouter() {
  return <RouterProvider router={routerRoutes} />;
}
