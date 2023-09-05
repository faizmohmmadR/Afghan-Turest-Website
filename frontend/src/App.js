import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";

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
          </Grid>
          <RightSidebar />
        </Grid>
      </Container>
    </Stack>
  );
};

export default App;
