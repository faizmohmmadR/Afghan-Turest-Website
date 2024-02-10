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
import MenuIcon from "@mui/icons-material/Menu";

import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginAnchorEl, setLoginAnchorEl] = useState();
  const navigate = useNavigate();
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
              <Typography
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                AFTW
              </Typography>
              <Box
                onClick={handleClick}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                }}
              >
                <MenuIcon />
              </Box>
            </Grid>
            <Grid item lg={8} textAlign={"center"}>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <MenuItem
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <HomeIcon /> <Typography pl={1}>Home</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  {" "}
                  <ContactMailIcon />{" "}
                  <Typography pl={1}> Contact-US</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  {" "}
                  <GroupsIcon /> <Typography pl={1}>About-US</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <FormatListBulletedIcon />{" "}
                  <Typography pl={1}>Pages</Typography> <ArrowDropDownIcon />
                </MenuItem>
              </Box>
              <Box
                onClick={handleClick}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                }}
              >
                AFTW
              </Box>
            </Grid>

            <Grid item lg={2} display={"flex"} justifyContent={"end"}>
              <Avatar sx={{ display: "none" }} onClick={handleLoginClick}>
                Fa
              </Avatar>
              <Link
                to="/login"
                onClick={handleLoginClick}
                style={{ display: "block" }}
              >
                Login
              </Link>
            </Grid>

            <Menu
              open={Boolean(loginAnchorEl)}
              anchorEl={loginAnchorEl}
              onClose={handleLoginClose}
            >
              <MenuItem>Log out</MenuItem>
              <Link to="/register">
                <MenuItem>Register</MenuItem>
              </Link>
            </Menu>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <Box>
                <MenuItem
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <HomeIcon /> <Typography pl={1}>Home</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  {" "}
                  <ContactMailIcon />{" "}
                  <Typography pl={1}> Contact-US</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  {" "}
                  <GroupsIcon /> <Typography pl={1}>About-US</Typography>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <FormatListBulletedIcon />{" "}
                  <Typography pl={1}>Pages</Typography> <ArrowDropDownIcon />
                </MenuItem>
              </Box>
            </Menu>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
