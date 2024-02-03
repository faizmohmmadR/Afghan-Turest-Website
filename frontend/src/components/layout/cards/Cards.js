import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const places = [
  {
    name: "Kabul",
    image: "./images/places/kabul.jpg",
    description: `If you open it directly in the browser, you will see an empty
    page. You can add webfonts, meta tags, or analytics to this
    file. The build step will place the bundled scripts into the
    tag.`,
  },

  {
    name: "Herat",
    image: "./images/places/herat.jpg",
    description: `If you open it directly in the browser, you will see an empty
    page. You can add webfonts, meta tags, or analytics to this
    file. The build step will place the bundled scripts into the
    tag.`,
  },

  {
    name: "Ghor",
    image: "./images/places/saghar.jpg",
    description: `If you open it directly in the browser, you will see an empty
    page. You can add webfonts, meta tags, or analytics to this
    file. The build step will place the bundled scripts into the
    tag.`,
  },

  //   {
  //     name: "Mazar",
  //     image: "./images/pic3.jpg",
  //     description: `If you open it directly in the browser, you will see an empty
  //     page. You can add webfonts, meta tags, or analytics to this
  //     file. The build step will place the bundled scripts into the
  //     tag.`,
  //   },
];
const cardContentStyle = {
  minHeight: "120px",
  padding: 1,
  // backgroundColor: "#0e072b",
  // color: "white",
};
const paperStyle = {
  paddingBottom: 6,
  paddingTop: 6,
};
const Cards = () => {
  return (
    <Container>
      <Paper sx={paperStyle}>
        <Grid container justifyContent={"center"}>
          <Grid item lg={12} textAlign={"center"} mb={5}>
            <Typography variant="h3">Most visited Place</Typography>
          </Grid>
          <Grid container justifyContent={"center"} gap={4}>
            {places.map((place, index) => (
              <Grid item key={index} xs={12} sm={4} md={3} lg={3}>
                <Card sx={{ boxShadow: "0px 0px 10px #333" }}>
                  <CardMedia
                    height={"150px"}
                    component={"img"}
                    src={place.image}
                  />
                  <CardContent sx={cardContentStyle}>
                    <Typography variant="h4">{place.name}</Typography>
                    <Typography variant="body2">{place.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Cards;
