import React from "react";
import { Grid } from "@mui/material";

const Food = ({ food }) => {
  return (
    <>
      <Grid
        key={food.id}
        item
        xs={5}
        sm={3}
        md={3}
        lg={2}
        component={"img"}
        src={food.imag}
      ></Grid>
    </>
  );
};

export default Food;
