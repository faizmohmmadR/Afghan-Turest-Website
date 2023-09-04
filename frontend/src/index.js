import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cards from "./components/layout/Cards";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slider from "./components/slider/Slider";
import HistoricalPlaces from "./components/category/HistoricalPlaces";

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
  {
    path: "/new",
    element: <HistoricalPlaces />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
