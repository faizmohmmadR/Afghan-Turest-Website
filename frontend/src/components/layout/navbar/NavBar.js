import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginAnchorEl, setLoginAnchorEl] = useState();
  const handleLoginClick = (e) => {
    setLoginAnchorEl(e.currentTarget);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleLoginClose = () => {
    setLoginAnchorEl(false);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <AppBar sx={{ backgroundColor: "white", color: "black" }}>
      <Container>
        <Toolbar sx={{ position: "static" }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item lg={2}>
              <Typography>AFTW</Typography>
            </Grid>
            <Grid item lg={8} textAlign={"center"}>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <MenuItem>
                  {" "}
                  <HomeIcon /> <Typography pl={1}>Home</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <HomeIcon /> <Typography pl={1}> Home</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <HomeIcon /> <Typography pl={1}> Home</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <HomeIcon /> <Typography pl={1}> Home</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <HomeIcon /> <Typography pl={1}> Home</Typography>
                </MenuItem>
              </Box>
              <Box
                onClick={handleClick}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                }}
              >
                Menu
              </Box>
            </Grid>

            <Grid item lg={2} display={"flex"} justifyContent={"end"}>
              <Avatar onClick={handleLoginClick}>Fa</Avatar>
            </Grid>

            <Menu
              open={Boolean(loginAnchorEl)}
              anchorEl={loginAnchorEl}
              onClose={handleLoginClose}
            >
              <MenuItem>Log out</MenuItem>
              <MenuItem>Register</MenuItem>
            </Menu>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <MenuItem>Parks</MenuItem>
              <MenuItem>Hospitals</MenuItem>
              <MenuItem>Historical</MenuItem>
              <MenuItem>Resturants</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
