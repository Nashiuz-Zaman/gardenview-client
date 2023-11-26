// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react router import
import { RouterProvider } from "react-router-dom";

// router import
import router from "./router/router";

// provider import
import MediaQueryContextProvider from "./providers/MediaQueryContext";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MediaQueryContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MediaQueryContextProvider>
  </React.StrictMode>
);
