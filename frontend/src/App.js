import React from "react";
import Header from "./components/layout.js/Header";
import NavBar from "./components/layout.js/NavBar";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <Stack>
      <Header />
      <NavBar />
    </Stack>
  );
};

export default App;
