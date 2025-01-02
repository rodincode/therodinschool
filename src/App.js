import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Partnerships from "./components/Partnerships";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <About />
        <Features />
        <Programs />
        <Partnerships />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
