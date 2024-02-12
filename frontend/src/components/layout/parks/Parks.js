import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const parks = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];

const arrowStyle = {
  position: "absolute",
  top: "55%",
  fontSize: "40px",
  color: "green",
  cursor: "pointer",
};
const Parks = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  if (scrollPosition) {
  }
  const handleScroll = (way) => {
    way === "right"
      ? containerRef.current.scrollBy({ left: 560, behavior: "smooth" })
      : containerRef.current.scrollBy({ left: -560, behavior: "smooth" });
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
        mt: 8,
        position: "sticky",
      }}
    >
      <Typography variant="h4" margin={"25px 0px"}>
        Most Populer Praks
      </Typography>
      <Grid
        gap={2}
        sx={{
          display: "flex",
          justifyContent: "center",
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
          sx={{
            width: "50%",
            height: { xs: "20vh", sm: "40vh", md: "60vh" },
            position: "relative",
            transition: "all 2s",
            ":hover": {
              transform: "scale(0.9,0.9)",
            },
          }}
        >
          <Box
            width={"100%"}
            height={"99%"}
            component={"img"}
            borderRadius={"10px"}
            src="./images/places/akhteyaradin.png"
          ></Box>
          <Box sx={{ position: "absolute", bottom: "10%", left: "3%" }}>
            {" "}
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "18px", md: "25px" }, fontWeight: "bold" }}
            >
              {" "}
              Test for a
            </Typography>{" "}
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "10px", md: "18px" } }}
            >
              {" "}
              dolor sit amet consectetur adipisicing elit. Nam itaque rem quasi
              optio natus
            </Typography>{" "}
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{ height: { xs: "20vh", sm: "40vh", md: "60vh" }, width: "50%" }}
          gap={2}
        >
          {parks.map((p, i) => (
            <Box
              key={i}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box
                key={i}
                component={"img"}
                src="./images/places/akhteyaradin.png"
                sx={{
                  width: "21.5vw",
                  height: "64%",
                  borderRadius: "10px",
                }}
              ></Box>
              <Box pl={0.3}>
                <Typography
                  width={"21vw"}
                  sx={{
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

export default Parks;
