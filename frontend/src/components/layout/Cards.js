import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const CardStyle = styled(Card)(({ theme }) => ({
  width: "22vw",
  height: "40vh",
}));

const data = [
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
  {
    title: "Kandahar",
    description: "something",
    address: "kabul",
    url: "https://peakvisor.com/photo/Kabul-Afghanistan-Sakhi-Shrine.jpg",
  },
];


const Cards = (props) => {
  return (
    <>
      <Grid
        container
        mt={3}
        sx={{ backgroundColor: "#e0dcdc", padding: "10px" }}
      >
        <Typography
          variant="h4"
          margin={"0px auto"}
          color="#05ad9d"
          padding="10px"
        >
          {props.category}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {props.data.map((data, index) => (
            <CardStyle key={index}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "70%",
                  transition: "all 1s",
                  ":hover": {
                    transform: "scale(0.8,0.8)",
                    borderRadius: "50%",
                  },
                }}
                src={data.url}
              ></CardMedia>
              <CardContent sx={{ width: "100%", height: "30%" }}>
                <Typography variant="h5">{data.title}</Typography>
                <Typography variant="subtitle2">{data.address} </Typography>
              </CardContent>
            </CardStyle>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default Cards;