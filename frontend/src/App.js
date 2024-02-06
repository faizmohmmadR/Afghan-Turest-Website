import React from "react";
// import NavBar from "./components/layout/navbar/NavBar";
import { Box } from "@mui/material";
import Header from "./components/layout/header/Header";
import Cards from "./components/layout/cards/Cards";
import "./App.css";
import Foods from "./components/layout/foods/Foods";
import TrendingPlaces from "./components/layout/trendingPlaces/TrendingPlaces";
import Parks from "./components/layout/parks/Parks";
const App = () => {
  return (
    <Box className="root">
      <Header />
      <Cards />
      <Foods />
      <TrendingPlaces />
      <Parks />
      <Box pb={20}></Box>
    </Box>
  );
};

export default App;
