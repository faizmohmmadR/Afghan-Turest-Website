import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Food from "./Food";
const foods = [
  { id: 1, name: "Edge1", imag: "./images/food/ege.jpg" },
  { id: 1, name: "Edge2", imag: "./images/food/ege.jpg" },
  { id: 1, name: "Edge3", imag: "./images/food/ege.jpg" },
  { id: 1, name: "Edge4", imag: "./images/food/ege.jpg" },
];

const Foods = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ pb: 5 }}>
        <Typography variant="h3" textAlign={"center"} p={7}>
          Famouse Food
        </Typography>
        <Grid container gap={3} justifyContent={"center"}>
          {foods.map((food) => (
            <>
              <Food key={food.id} food={food} />
            </>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Foods;
