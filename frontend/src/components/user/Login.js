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
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);

    console.log("Email: ", email);
    console.log("Password: ", password);
  };
  return (
    <Container>
      <Grid container mt={10}>
        <Grid item xs={12} sm={8} md={6} margin={"0px auto"}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h4" textAlign={"center"}>
              Login Page
            </Typography>
            <Box component={"form"} mt={5}>
              <FormLabel htmlFor="email">Username or Email</FormLabel>
              <TextField
                value={email}
                id="email"
                size="small"
                name="email"
                fullWidth
                placeholder="examole@gmail.com"
                sx={styled}
                onChange={handleChange}
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
                onChange={handleChange}
                type="password"
              />

              <Grid textAlign={"center"}>
                <Button variant="contained">Login</Button>
              </Grid>
            </Box>

            <Grid lg={12} textAlign={"center"} padding={5}>
              Does not have account yet? /{" "}
              <Link to={"/register"}>Register</Link>{" "}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
