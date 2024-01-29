import React, { useState } from "react";
import {
  AppBar,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item lg={4}>
            <Typography mt={2}>AFTW</Typography>
          </Grid>
          <Grid item lg={8} textAlign={"center"}>
            <List sx={{ display: "flex" }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Places" />
              </ListItemButton>
            </List>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClick={handleClose}
            >
              <MenuItem>Parks</MenuItem>
              <MenuItem>Hospitals</MenuItem>
              <MenuItem>Historical</MenuItem>
              <MenuItem>Resturants</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
