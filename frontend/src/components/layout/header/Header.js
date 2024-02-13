import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const imageStyle = {};
const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        color: "white",
        borderBottomRightRadius: "20%",
        borderBottomLeftRadius: "20%",
      }}
    >
      <Container>
        <Grid
          container
          width={"100%"}
          // mt={7}
          pt={10}
          sx={{ height: "100svh" }}
          // sx={{ height: { lg: "80vh", xl: "10vh" } }}
        >
          <Grid item lg={6}>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "25px",
                  sm: "45px",
                  md: "50px",
                  fontWeight: "bold",
                },
              }}
            >
              Welcome to Afghan Turist website
            </Typography>

            <Typography
              sx={{ width: { xs: "100%", sm: "60%" } }}
              variant="h5"
              mt={4}
            >
              Here you can find the best place for go and here you can set your
              favorite places for yor next travel
            </Typography>
          </Grid>

          <Grid item xs={12} lg={6} position={"relative"}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "350px",
                perspective: "800px",
                position: "relative",
                margin: { xs: "20px auto" },
                backgroundImage:
                  'url("./images/places/band-e-amir-national.jpg")',
                // bgcolor: "green",
              }}
            >
              <Box
                sx={{
                  width: { xs: "200px", sm: "300px" },
                  height: "350px",
                  transform: "rotateY(-25deg)",
                  transition: "all 1s ease",
                  ":hover": { transform: "rotateY(0deg)" },
                  borderRadius: "10px",
                  boxShadow: "0px 0px 20px #333",
                }}
                component={"img"}
                src="./images/places/band-e-amir-national.jpg"
              ></Box>
              <Box
                sx={{
                  width: { xs: "200px", sm: "300px" },
                  height: "350px",
                  transform: "rotateY(25deg)",
                  position: "absolute",
                  left: "55%",
                  transition: "all 1s ease",
                  ":hover": { transform: "rotateY(0deg)" },
                  borderRadius: "10px",
                  boxShadow: "0px 0px 20px #333",
                }}
                component={"img"}
                src="./images/places/herat-musqe.jpg"
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
