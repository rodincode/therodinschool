
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rodin School</h1>
        <p>Empowering the future with accessible, self-sustaining education.</p>
        <a href="#about" className="btn">Learn More</a>
      </header>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          The Rodin School is a revolutionary online-first institution combining 
          cutting-edge technology and offline partnerships to create disciplined, 
          ethical, and future-ready leaders.
        </p>
      </section>

      <section id="features" className="section">
        <h2>Our Features</h2>
        <ul>
          <li>Online learning platform with AI-driven personalization</li>
          <li>Offline partnerships with top institutions like NDA, IMA, and IBS</li>
          <li>Practical training through labs, workshops, and camps</li>
        </ul>
      </section>

      <section id="partners" className="section">
        <h2>Our Partners</h2>
        <p>
          We collaborate with top institutions like Cotton School, Doon School, NDA, 
          IMA, LBSNAA, and Sainik Schools to deliver the best educational experience.
        </p>
      </section>

      <footer>
        <p>&copy; 2024 Rodin School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
