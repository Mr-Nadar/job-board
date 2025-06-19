import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { query } });
  };

  return (
    <section
      style={{
        minHeight: "70vh",
        background: `#fff url("./img.jpg") no-repeat center center/cover`,
        color: "#1976d2",
        padding: "4rem 0 3rem 0",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 0,
        boxShadow: "0 8px 32px rgba(25, 118, 210, 0.10)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          background: "rgba(255,255,255,0.85)",
          borderRadius: "16px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            color: "#1976d2",
          }}
        >
          Find Your Dream Job <br />
          in Tech, Design & More
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: 400,
            marginBottom: "2.5rem",
            color: "#1976d2",
          }}
        >
          Discover thousands of opportunities from top companies. <br />
          Apply in one click and take your career to the next level.
        </p>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search jobs, companies, skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: "8px",
              border: "1px solid #1976d2",
              fontSize: "1.1rem",
              width: "320px",
              maxWidth: "70vw",
              outline: "none",
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#ffd600",
              color: "#1976d2",
              fontWeight: 700,
              border: "none",
              borderRadius: "8px",
              padding: "0.9rem 2rem",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#fff176")}
            onMouseOut={(e) => (e.target.style.background = "#ffd600")}
          >
            Search
          </button>
        </form>
        <div style={{ fontSize: "1rem", color: "#1976d2" }}>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          Join our talent community to get matched with top companies!
        </div>
      </div>
    </section>
  );
};

export default Hero;
