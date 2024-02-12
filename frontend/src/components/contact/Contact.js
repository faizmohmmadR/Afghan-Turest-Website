import {
  Button,
  Container,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Container>
      <Paper sx={{ mt: 2, padding: 4 }}>
        <Grid
          container
          justifyItems={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Typography variant="h4">Contact Us</Typography>
          <Grid item component={"form"} lg={8} textAlign={"start"}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              fullWidth
              placeholder="Name"
              size="small"
              id="name"
              sx={{ mb: 3 }}
            />

            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              fullWidth
              placeholder="example@gmail.com"
              size="small"
              id="email"
              sx={{ mb: 3 }}
            />
            <FormLabel htmlFor="message">Message</FormLabel>
            <TextField
              fullWidth
              placeholder="write your message"
              size="small"
              id="message"
              sx={{ mb: 3 }}
              multiline
              minRows={"6"}
            />
            <Grid item textAlign={"end"}>
              <Button variant="contained">Send</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
