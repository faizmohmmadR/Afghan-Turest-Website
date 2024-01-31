import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const places = [
  {
    name: "Kabul",
    image: "./images/pic3.jpg",
    description: `If you open it directly in the browser, you will see an empty
    page. You can add webfonts, meta tags, or analytics to this
    file. The build step will place the bundled scripts into the
    tag.`,
  },

  {
    name: "Herat",
    image: "./images/RedCar.jpg",
    description: `If you open it directly in the browser, you will see an empty
    page. You can add webfonts, meta tags, or analytics to this
    file. The build step will place the bundled scripts into the
    tag.`,
  },

  {
    name: "Ghor",
    image: "./images/pic 5.jpg",
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

const Cards = () => {
  return (
    <Container>
      <Grid container gap={4} justifyContent={"center"}>
        {places.map((place, index) => (
          <Grid item key={index} lg={3}>
            <Card>
              <CardMedia
                height={"150px"}
                component={"img"}
                // sx={{
                //   objectFit: "cover",
                //   objectPosition: "center",
                //   bgcolor: "green",
                // }}
                src={place.image}
              />
              <CardContent sx={{ minHeight: "150px" }}>
                <Typography variant="h4">{place.name}</Typography>
                <Typography>{place.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
