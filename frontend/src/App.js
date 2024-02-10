import React from "react";
// import NavBar from "./components/layout/navbar/NavBar";
import { Box } from "@mui/material";
import "./App.css";
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
