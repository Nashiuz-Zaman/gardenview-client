// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layouts
import RootLayout from "../components/layouts/RootLayout";
import AuthenticateLayout from "../components/layouts/AuthenticateLayout";

// page components
import Home from "../components/pages/Home/Home/Home";
import ErrorPage from "./../components/pages/ErrorPage/ErrorPage";
import Login from "../components/pages/Login/Login/Login";
import Register from "../components/pages/Register/Register/Register";

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
]);

export default router;
