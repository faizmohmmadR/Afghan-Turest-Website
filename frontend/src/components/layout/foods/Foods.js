import { Box, Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const foods = [
  { id: 1, name: "Edge1", imag: "./images/food/ege.jpg" },
  { id: 2, name: "Edge2", imag: "./images/food/ege.jpg" },
  { id: 3, name: "Edge3", imag: "./images/food/ege.jpg" },
  { id: 4, name: "Edge4", imag: "./images/food/ege.jpg" },
  { id: 5, name: "Edge5", imag: "./images/food/ege.jpg" },
  { id: 6, name: "Edge6", imag: "./images/food/ege.jpg" },
  { id: 7, name: "Edge7", imag: "./images/food/ege.jpg" },
  { id: 8, name: "Edge8", imag: "./images/food/ege.jpg" },
  { id: 9, name: "Edge9", imag: "./images/food/ege.jpg" },
  { id: 10, name: "Edge10", imag: "./images/food/ege.jpg" },
  { id: 11, name: "Edge11", imag: "./images/food/ege.jpg" },
  { id: 12, name: "Edge12", imag: "./images/food/ege.jpg" },
];

const arrowStyle = {
  position: "absolute",
  top: "45%",
  fontSize: "3rem",
  color: "green",
  cursor: "pointer",
};
const Foods = () => {
  const containerRef = useRef(null);
  function handleScrol(way) {
    way === "right"
      ? containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
      : containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }

  return (
    <Container
      sx={{ mt: 4, maxWidth: "1200px", width: "95%", position: "relative" }}
    >
      <Box
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto",
          scrollBehavior: "smooth",
        }}
        ref={containerRef}
      >
        {foods.map((food) => (
          <>
            <Grid
              key={food.id}
              component={"img"}
              src={food.imag}
              sx={{
                width: "325px",
                height: "400px",
              }}
            ></Grid>
          </>
        ))}
      </Box>
      <ArrowCircleLeftIcon
        sx={arrowStyle}
        style={{ left: "0%" }}
        onClick={() => {
          handleScrol("left");
        }}
      />
      <ArrowCircleRightIcon
        sx={arrowStyle}
        style={{ right: "0%" }}
        onClick={() => {
          handleScrol("right");
        }}
      />
    </Container>
  );
};

export default Foods;
