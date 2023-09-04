import React, { Fragment, useState } from "react";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const SlideStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70vw",
  height: "77vh",
  borderRadius: "15px",
  margin: "0px auto",
  marginTop: 10,
}));

const images = [
  {
    title: "ghor",
    description: "something",
    address: "ghor",
    url: "https://www.malgari.com/upload/photos/2022/07/25Xl1sxZwFhuk6X7xdl8_31_c4839dff847e2887e3c0058cf3d34888_image.jpg",
  },
  {
    title: "kabul",
    description: "something",
    address: "kabul",
    url: "https://peakvisor.com/photo/Kabul-Afghanistan-Sakhi-Shrine.jpg",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const nextImage = () => {
    return setCurrentImage(
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );
  };
  const prevImage = () => {
    return setCurrentImage(
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );
  };
  return (
    <>
      <ArrowCircleLeftIcon
        onClick={prevImage}
        sx={{
          position: "absolute",
          top: "60%",
          left: "20%",
          fontSize: "3rem",
          color: "text.secondary",
        }}
      />
      <SlideStyle container>
        {images.map((image, index) => (
          <Fragment key={index}>
            {currentImage === index && (
              <Box
                sx={{ height: "100%", width: "100%", borderRadius: "14px" }}
                component="img"
                src={image.url}
              ></Box>
            )}
          </Fragment>
        ))}
      </SlideStyle>
      <ArrowCircleRightIcon
        onClick={nextImage}
        sx={{
          position: "absolute",
          top: "60%",
          right: "20%",
          fontSize: "3rem",
          color: "text.secondary",
        }}
      />
    </>
  );
};

export default Slider;
