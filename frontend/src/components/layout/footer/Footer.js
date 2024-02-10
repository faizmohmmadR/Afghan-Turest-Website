import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";

// import EmailIcon from "@mui/icons-material/Email";

import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="h2"
              align="center"
              sx={{ mb: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac pulvinar tellus. Vivamus vitae mattis massa, ac
              ullamcorper neque.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="h2"
              align="center"
              sx={{ mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Email: faizmohammadramdel@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Phone: +93778587455
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="h2"
              align="center"
              sx={{ mb: 2 }}
            >
              Follow Us
            </Typography>
            <Grid textAlign={"center"}>
              <a
                href="https://github.com/faizmohmmadR"
                target="_blank"
                rel="noreferrer"
                style={{ margin: 10 }}
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100015165183602&mibextid=kFxxJD"
                target="_blank"
                rel="noreferrer"
                style={{ margin: 10 }}
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/faizmohammadramdel/"
                target="_blank"
                rel="noreferrer"
                style={{ margin: 10 }}
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/faizmohammad-rahmdel061028251"
                target="_blank"
                rel="noreferrer"
                style={{ margin: 10 }}
              >
                <LinkedInIcon />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 2 }}
      >
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
