import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const foods = [
  { id: 3, name: "Herat1", imag: "./images/places/akhteyaradin.png" },
  { id: 4, name: "Mazar-e-sharif", imag: "./images/places/Blue-Mosque.jpg" },
  {
    id: 5,
    name: "Herat",
    imag: "./images/places/herat.jpg",
  },

  {
    id: 6,
    name: "Ghor",
    imag: "./images/places/saghar.jpg",
  },
];
const Foods = () => {
  return (
    <Container sx={{ mt: 5, mb: 15 }}>
      <Typography variant="h4" margin={"30px 0px"}>
        Most Populer Foods
      </Typography>
      <Grid container gap={8} justifyContent={"space-around"}>
        {foods.map((f, i) => (
          <Grid key={i} lg={2.5} sm={4} md={3} xs={12} item>
            <Box
              sx={{
                width: { xs: "100%", sm: "265px", md: "280px" },
                height: "200px",
                border: "1px solid green",
                perspective: "800px",
                mt: 5,
              }}
            >
              <Typography
                variant="h5"
                textAlign={"center"}
                bgcolor={"green"}
                color={"white"}
                padding={"5px"}
              >
                {f.name}
              </Typography>
              <Box
                sx={{
                  width: { xs: "100%", sm: "265px", md: "280px" },
                  height: "200px",
                  boxShadow: "0px 0px 10px #333",
                  transform: "rotateX(20deg)",
                  transition: "all 1s ease",
                  ":hover": {
                    transform: "rotateX(0deg)",
                  },
                }}
                component={"img"}
                src={f.imag}
              ></Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Foods;
