import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Container, List, ListItem, Toolbar } from "@mui/material";

const ListItemStyle = styled(ListItem)(({theme})=>({
    width: '125px',
    fontSize: '18px',
    transitionDuration: '0.5s',
    ":hover": {transform: 'scale(1.3,1.3)',cursor: 'pointer'}
}))
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'text.secondary' }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component='h2'>LoGo</Box>
          <Box>
            <List sx={{ display: "flex" }}>
              <ListItemStyle>About Us</ListItemStyle>
              <ListItemStyle>Contact Us</ListItemStyle>
              <ListItemStyle>Home</ListItemStyle>
            </List>
          </Box>
          <Box>
            <Avatar sx={{ bgcolor: 'deepOrange[500]' }}>FM</Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
