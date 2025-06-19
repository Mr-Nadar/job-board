import React from "react";

const About = () => (
  <section
    style={{
      background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
      minHeight: "100vh",
      padding: "4rem 0 3rem 0",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ fontWeight: 700, fontSize: "2.2rem", marginBottom: "2rem" }}>
        About JobBoard
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        JobBoard is your one-stop platform for discovering and posting the best jobs in tech, design, and more. 
        We connect talented individuals with top companies and help you take the next step in your career.
      </p>
      <p style={{ fontSize: "1.1rem" }}>
        Whether you're looking for your dream job or the perfect candidate, JobBoard is here to help.
      </p>
    </div>
  </section>
);

export default About;