import React from "react";
import { Container, Typography, List, ListItem } from "@mui/material";

function Features() {
  const features = [
    "AI-driven personalization for learning",
    "Offline partnerships with exam centers and labs",
    "Practical training through workshops and camps",
    "Leadership and ethical development",
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Features;
