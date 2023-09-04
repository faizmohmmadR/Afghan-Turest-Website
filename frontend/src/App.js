import React from "react";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import { Container, Grid, Stack } from "@mui/material";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";
import { Outlet } from "react-router-dom";
import HistoricalPlaces from "./components/category/HistoricalPlaces";
import Nature from "./components/category/Nature";
import Parks from "./components/category/Parks";
import Hotels from "./components/category/Hotels";
import Restorants from "./components/category/Restorants";
import Hospitals from "./components/category/Hospitals";

const App = () => {
  return (
    <Stack>
      <Header />
      <NavBar />
      <Container>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "10px",
          }}
        >
          <LeftSidebar />
          <Grid item>
            <Outlet />
            <Grid item>
              <HistoricalPlaces />
              <Nature />
              <Parks />
              <Hotels />
              <Restorants />
              <Hospitals />
            </Grid>
          </Grid>
          <RightSidebar />
        </Grid>
      </Container>
    </Stack>
  );
};

export default App;
