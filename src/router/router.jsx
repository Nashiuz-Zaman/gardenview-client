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

// user pages
import UserProfilePage from "../components/pages/UserProfilePage/UserProfilePage";

// route
import PrivateRoute from "./../components/routes/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home /> }],
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
      { path: "/dashboard/user/profile", element: <UserProfilePage /> },
    ],
  },
]);

export default router;
