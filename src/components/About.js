import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography>
        Rodin School is a revolutionary online-first institution combining
        cutting-edge technology and offline partnerships. Our mission is to
        create disciplined, ethical, and future-ready leaders by fostering
        self-sustaining education.
      </Typography>
    </Container>
  );
}

export default About;
