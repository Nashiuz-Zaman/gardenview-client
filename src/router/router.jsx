// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layouts
import RootLayout from "../components/layouts/RootLayout";
import AuthenticateLayout from "../components/layouts/AuthenticateLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

// page components
import Home from "../components/pages/Home/Home/Home";
import ErrorPage from "./../components/pages/ErrorPage/ErrorPage";
import Login from "../components/pages/Login/Login/Login";
import Register from "../components/pages/Register/Register/Register";
import Welcome from "./../components/pages/Welcome/Welcome";
import Apartments from "../components/pages/Apartments/Apartments/Apartments";
import Announcements from "../components/pages/Announcements/Announcements";

// user pages
import UserProfilePage from "../components/pages/UserPages/UserProfilePage/UserProfilePage";

// member pages
import MemberProfilePage from "../components/pages/MemberPages/MemberProfilePage/MemberProfilePage";

// admin pages
import AdminProfilePage from "../components/pages/AdminPages/AdminProfilePage/AdminProfilePage";
import MakeAnnouncement from "../components/pages/AdminPages/MakeAnnoucement/MakeAnnouncement";

// route
import PrivateRoute from "./../components/routes/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/apartments", element: <Apartments /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticateLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Welcome /> },
      { path: "announcements", element: <Announcements /> },
      // user routes
      { path: "user/profile", element: <UserProfilePage /> },
      // member routes
      { path: "member/profile", element: <MemberProfilePage /> },
      // admin routes
      { path: "admin/profile", element: <AdminProfilePage /> },
      {
        path: "admin/make-announcements",
        element: <MakeAnnouncement />,
      },
    ],
  },
]);

export default router;
