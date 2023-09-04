import React from "react";
import Header from "./components/layout.js/Header";
import NavBar from "./components/layout.js/NavBar";
import { Grid, Stack } from "@mui/material";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
    <Stack>
      <Header />
      <NavBar />
      <Grid>
        <Slider />
      </Grid>
    </Stack>
  );
};

export default App;
