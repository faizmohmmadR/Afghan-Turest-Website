import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
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
  top: "53%",
  fontSize: "3rem",
  color: "green",
  cursor: "pointer",
};

const Foods = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  if (scrollPosition) {
  }
  const handleScroll = (way) => {
    if (way === "right") {
      containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    } else if (way === "left") {
      containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const checkArrowsVisibility = () => {
    const container = containerRef.current;
    setIsLeftArrowVisible(container.scrollLeft !== 0);
    setIsRightArrowVisible(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  const handleScrollEvent = () => {
    setScrollPosition(containerRef.current.scrollLeft);
    checkArrowsVisibility();
  };

  return (
    <Container
      sx={{ mt: 4, maxWidth: "1200px", width: "95%", position: "relative" }}
    >
      <Paper sx={{ padding: "10px" }}>
        <Typography variant="h4" p={4} pl={0}>
          Browse by Provinces
        </Typography>
        <Box
          gap={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "auto",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scroll bar
            },
            // paddingLeft: "110px",
          }}
          ref={containerRef}
          onScroll={handleScrollEvent}
        >
          {foods.map((food) => (
            <Box key={food.id}>
              <Box
                component={"img"}
                src={food.imag}
                sx={{
                  width: "265px",
                  height: { xs: "200px", sm: "320px" },
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 4px #333 ",
                }}
              />
              <Typography variant="h6">{food.name}</Typography>
            </Box>
          ))}
        </Box>
        {isLeftArrowVisible && (
          <ArrowCircleLeftIcon
            style={arrowStyle}
            sx={{ left: "0%" }}
            onClick={() => {
              handleScroll("left");
            }}
          />
        )}
        {isRightArrowVisible && (
          <ArrowCircleRightIcon
            sx={{ right: "0%" }}
            style={arrowStyle}
            onClick={() => {
              handleScroll("right");
            }}
          />
        )}
      </Paper>
    </Container>
  );
};

export default Foods;
