import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

function Programs() {
  const programs = [
    { title: "Leadership Training", description: "Build ethical leaders." },
    { title: "AI-Powered Learning", description: "Harness cutting-edge AI." },
    { title: "Military-Inspired Discipline", description: "Instill discipline and structure." },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Programs
      </Typography>
      <Grid container spacing={3}>
        {programs.map((program, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{program.title}</Typography>
                <Typography>{program.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Programs;
