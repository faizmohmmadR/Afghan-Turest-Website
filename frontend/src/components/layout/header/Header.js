import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <Container>
      <NavBar />
      <Grid container height={"85vh"} width={"100%"} mt={12}>
        <Grid item lg={12} textAlign={"center"}>
          <Typography variant="h3">Welcome to Afghan Turist website</Typography>

          <Typography
            sx={{ width: { xs: "100%", sm: "60%" } }}
            margin={"0px auto"}
            variant="h5"
            mt={4}
          >
            Here you can find the best place for go and here you can set your
            favorite places for yor next travel
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid item xs={12} md={8} margin={"0px auto"} mb={3}>
            <Typography variant="h4">Contuct us:</Typography>
          </Grid>
          <Grid item xs={12} md={8} display={"flex"} margin={"0px auto"}>
            <TextField
              size="large"
              fullWidth
              placeholder="Write your message"
            ></TextField>
            <Button
              variant="outlined"
              sx={{ borderLeft: "0px", ml: "0px", borderRadius: "0px" }}
            >
              Sumbit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
