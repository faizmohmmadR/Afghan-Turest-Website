import { Box, Container, Grid } from "@mui/material";
import React from "react";
const parks = [{}, {}, {}, {}, {}, {}, {}];
const Parks = () => {
  return (
    <Container>
      <Box
        gap={1}
        container
        sx={{ position: "absolute", overflowX: "auto", display: "flex" }}
      >
        {parks.map(() => (
          <Box
            sx={{ width: "200px", height: "250px" }}
            component={"img"}
            src="./images/places/akhteyaradin.png"
          ></Box>
        ))}
      </Box>
    </Container>
  );
};

export default Parks;
