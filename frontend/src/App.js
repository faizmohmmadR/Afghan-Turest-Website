import React from "react";
// import NavBar from "./components/layout/navbar/NavBar";
import { Container } from "@mui/material";
import Header from "./components/layout/header/Header";
import Cards from "./components/layout/cards/Cards";

const App = () => {
  return (
    <Container>
      <Header />
      <Cards />
    </Container>
  );
};

export default App;
