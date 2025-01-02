import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Rodin School
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2">Welcome to Rodin School</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Empowering the future with accessible, self-sustaining education.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </Container>
    </>
  );
}

export default Header;
