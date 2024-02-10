import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
const Hospitals = () => {
  const currentSlide = useRef(null);

  const prev = () => (currentSlide.current.scrollLeft -= 1000);
  const next = () => (currentSlide.current.scrollLeft += 1000);
  return (
    <Container
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          mt: 10,
        }}
        ref={currentSlide}
      >
        {foods.map((f, i) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Change from "60%" to "100%"
              height: "100%",
              transition: "all 1s ease-out",
              ml: 10,
            }}
          >
            <Box
              sx={{
                width: "20vw",
                height: "70%",
              }}
            >
              <Typography variant="h3">{f.name}</Typography>
              <Typography variant="h6">
                {" "}
                dolor sit amet consectetur adipisicing elit. Nam itaque rem
                quasi optio natus dolor sit amet consectetur adipisicing elit.
                Nam itaque rem quasi optio natus
              </Typography>
              <Typography>Facebook</Typography>
              <Typography>Imo</Typography>
              <Typography>Tellegram</Typography>
            </Box>
            <Box
              component={"img"}
              src={f.imag}
              sx={{
                width: "30vw",
                height: "70%",
                borderRadius: "20px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
      <ArrowBackIosNewIcon
        sx={{
          position: "absolute",
          left: "-2%",
          top: "45%",
          fontSize: "50px",
          cursor: "pointer",
        }}
        onClick={prev}
      />
      <ArrowForwardIosIcon
        sx={{
          position: "absolute",
          right: "-2%",
          top: "45%",
          fontSize: "50px",
          cursor: "pointer",
        }}
        onClick={next}
      />
    </Container>
  );
};

export default Hospitals;
