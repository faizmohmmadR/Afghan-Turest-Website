import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const imageStyle = {
  borderRadius: "10px",
  ":hover": {
    outline: "1px solid green",
    opacity: "0.9",
  },
};
const imageTitleStyle = {
  position: "absolute",
};
const TrendingPlaces = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" margin={"10px 0px"}>
        Trending destination
      </Typography>
      <Typography variant="h6" color={"body2"}>
        Most popular choices for travellers from Pakistan
      </Typography>
      <Grid container>
        <Grid
          container
          gap={1}
          justifyContent={"space-between"}
          mb={2}
          position={"relative"}
        >
          <Grid
            lg={5.9}
            item
            xs={5.8}
            component={"img"}
            src="./images/places/akhteyaradin.png"
            sx={imageStyle}
          ></Grid>
          <Typography sx={imageTitleStyle} style={{ left: "2%" }} variant="h4">
            Herat
          </Typography>
          <Grid
            lg={5.9}
            item
            xs={5.8}
            component={"img"}
            src="./images/places/Blue-Mosque-Afghanistan-Mazar-e-Sharif.jpg"
            sx={imageStyle}
          ></Grid>
          <Typography sx={imageTitleStyle} style={{ left: "53%" }} variant="h4">
            Mazar
          </Typography>
        </Grid>

        <Grid
          container
          gap={1}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Grid
            item
            xs={3.8}
            sm={3.9}
            component={"img"}
            src="./images/places/khajeh-abdullah-ansari.jpg"
            sx={imageStyle}
          ></Grid>
          <Typography sx={imageTitleStyle} style={{ left: "2%" }} variant="h4">
            Herat
          </Typography>
          <Grid
            item
            xs={3.8}
            sm={3.9}
            component={"img"}
            src="./images/places/mazar-mousq.png"
            sx={imageStyle}
          ></Grid>
          <Typography sx={imageTitleStyle} style={{ left: "36%" }} variant="h4">
            Herat
          </Typography>
          <Grid
            item
            xs={3.8}
            sm={3.9}
            component={"img"}
            src="./images/places/jam1.jpg"
            sx={imageStyle}
          ></Grid>
          <Typography
            sx={imageTitleStyle}
            style={{ left: "69.5%" }}
            variant="h4"
          >
            Herat
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrendingPlaces;
