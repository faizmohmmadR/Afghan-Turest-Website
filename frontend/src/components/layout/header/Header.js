import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        color: "white",
      }}
    >
      <Container>
        <Grid
          container
          width={"100%"}
          // mt={7}
          pt={10}
          sx={{ height: { lg: "80vh", xl: "10vh" } }}
        >
          <Grid item lg={12} textAlign={"center"}>
            <Typography variant="h3">
              Welcome to Afghan Turist website
            </Typography>

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
          {/*
        <Grid item xs={12} lg={12}>
          <Grid item xs={12} md={8} margin={"0px auto"} mb={3}>
            <Typography variant="h4">Contuct us:</Typography>
          </Grid>
          <Grid item xs={12} md={8} display={"flex"} margin={"0px auto"}>
            <TextField
              size="large"
              fullWidth
              placeholder="Write your message"
              sx={{ backgroundColor: "white" }}
            />
            <Button
              variant="outlined"
              sx={{ borderLeft: "0px", ml: "0px", borderRadius: "0px" }}
            >
              Sumbit
            </Button>
          </Grid>
        </Grid>
*/}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
