import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slider from "./components/slider/Slider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Slider />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
