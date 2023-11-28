// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react router import
import { RouterProvider } from "react-router-dom";

// router import
import router from "./router/router";

// provider import
import MediaQueryContextProvider from "./providers/MediaQueryContext";
import AuthProvider from "./Providers/AuthProvider";
import LoginRegistratonProvider from "./Providers/LoginRegistrationProvider";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MediaQueryContextProvider>
      <AuthProvider>
        <LoginRegistratonProvider>
          <RouterProvider router={router}></RouterProvider>
        </LoginRegistratonProvider>
      </AuthProvider>
    </MediaQueryContextProvider>
  </React.StrictMode>
);
