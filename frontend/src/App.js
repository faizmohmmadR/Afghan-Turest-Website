import React from "react";
// import NavBar from "./components/layout/navbar/NavBar";
import { Box } from "@mui/material";
import Header from "./components/layout/header/Header";
import Cards from "./components/layout/cards/Cards";
import "./App.css";
import Foods from "./components/layout/foods/Foods";
import TrendingPlaces from "./components/layout/trendingPlaces/TrendingPlaces";
import Parks from "./components/layout/parks/Parks";
import Hospitals from "./components/layout/hospitals/Hospitals";
import NavBar from "./components/layout/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <Box className="root">
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default App;
