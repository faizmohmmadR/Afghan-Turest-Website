import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const foods = [
  { id: 3, name: "Herat1", imag: "./images/places/akhteyaradin.png" },
  { id: 4, name: "Mazar-e-sharif", imag: "./images/places/Blue-Mosque.jpg" },
  {
    id: 5,
    name: "Herat",
    imag: "./images/places/herat.jpg",
  },
  { id: 1, name: "Herat", imag: "./images/places/herat-musqe.jpg" },
  { id: 2, name: "Bameyan", imag: "./images/places/band-e-amir-national.jpg" },

  {
    id: 6,
    name: "Ghor",
    imag: "./images/places/saghar.jpg",
  },
];

const arrowStyle = {
  position: "absolute",
  top: "55%",
  fontSize: "40px",
  color: "green",
  cursor: "pointer",
};
const Hospitals = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  if (scrollPosition) {
  }
  const handleScroll = (way) => {
    way === "right"
      ? containerRef.current.scrollBy({ left: 1050, behavior: "smooth" })
      : containerRef.current.scrollBy({ left: -1050, behavior: "smooth" });
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
      sx={{
        maxWidth: "1200px",
        width: { xs: "100%", sm: "100%" },
        mt: 10,
        position: "sticky",
      }}
    >
      <Typography variant="h4" margin={"25px 0px"}>
        Most Populer Hospitals
      </Typography>
      <Grid
        gap={2}
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={containerRef}
        onScroll={handleScrollEvent}
      >
        <Box
          margin={"20px 0px"}
          display={"flex"}
          sx={{ height: { xs: "20vh", sm: "40vh", md: "60vh" }, width: "100%" }}
          gap={2}
        >
          {foods.map((f, i) => (
            <Box
              key={i}
              width={"100vw"}
              border={"1px solid white"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              sx={{ ml: { xs: 1.5, lg: 15 } }}
            >
              <Box pl={0.3}>
                <Typography
                  sx={{
                    width: { xs: "40vw", lg: "30vw" },
                    fontSize: { xs: "9px", sm: "15px", md: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  5 best ranking park in 4 province of
                </Typography>
                <Typography
                  width={"21vw"}
                  sx={{ fontSize: { xs: "7.5px", sm: "11px", md: "15px" } }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  itaque rem quasi optio natus
                </Typography>
              </Box>
              <Box
                key={i}
                component={"img"}
                src={f.imag}
                sx={{
                  width: { xs: "50vw", lg: "40vw" },
                  height: "90%",
                  borderRadius: "10px",
                }}
              ></Box>
            </Box>
          ))}
        </Box>
      </Grid>
      {isLeftArrowVisible && (
        <ArrowCircleLeftIcon
          onClick={() => {
            handleScroll("left");
          }}
          sx={arrowStyle}
          style={{ left: "0%" }}
        />
      )}
      {isRightArrowVisible && (
        <ArrowCircleRightIcon
          onClick={() => {
            handleScroll("right");
          }}
          sx={arrowStyle}
          style={{ right: "0%" }}
        />
      )}
    </Container>
  );
};

export default Hospitals;
