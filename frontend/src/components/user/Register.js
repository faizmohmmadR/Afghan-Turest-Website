import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const styled = {
  pb: "40px",
  pt: "5px",
};
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <Grid container mt={3}>
        <Grid item xs={12} sm={8} md={6} margin={"0px auto"}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h4" textAlign={"center"}>
              Register Page
            </Typography>
            <Box component={"form"} mt={5}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                value={username}
                id="username"
                size="small"
                name="username"
                fullWidth
                placeholder="example"
                sx={styled}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                value={email}
                id="email"
                size="small"
                name="email"
                fullWidth
                placeholder="example@gmail.com"
                sx={styled}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                value={password}
                name="password"
                id="password"
                size="small"
                fullWidth
                placeholder="password"
                sx={styled}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />

              <Grid textAlign={"center"}>
                <Button variant="contained">Register</Button>
              </Grid>
            </Box>
            <Grid item lg={12} textAlign={"center"} pt={4}>
              Already have account? / <Link to={"/login"}>Login</Link>{" "}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
