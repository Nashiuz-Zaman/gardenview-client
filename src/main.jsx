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
import FlatsAgreementsProvider from "./providers/FlatsAgreementsProvider";

// tanstack import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// style import
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MediaQueryContextProvider>
        <AuthProvider>
          <LoginRegistratonProvider>
            <FlatsAgreementsProvider>
              <RouterProvider router={router}></RouterProvider>
            </FlatsAgreementsProvider>
          </LoginRegistratonProvider>
        </AuthProvider>
      </MediaQueryContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
