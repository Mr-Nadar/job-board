import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
      color: "#fff",
      padding: "2rem 0 1rem 0",
      textAlign: "center",
      boxShadow: "0 -2px 16px rgba(25, 118, 210, 0.08)",
      position: "relative",
      zIndex: 2,
      margin: "0",
      borderRadius: "0",
    }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.2rem", fontSize: "1.2rem", fontWeight: 600 }}>
        <span style={{ color: "#ffd600" }}>●</span> JobBoard
      </div>
      <div style={{ marginBottom: "1.2rem", color: "#e3f2fd" }}>
        Connecting talent with opportunity. Your next career move starts here.
      </div>
      <div style={{ marginBottom: "1.2rem" }}>
        <a
          href="/"
          style={{
            color: "#fff",
            margin: "0 1rem",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseOver={e => (e.target.style.color = "#ffd600")}
          onMouseOut={e => (e.target.style.color = "#fff")}
        >
          Home
        </a>
        <a
          href="/jobs"
          style={{
            color: "#fff",
            margin: "0 1rem",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseOver={e => (e.target.style.color = "#ffd600")}
          onMouseOut={e => (e.target.style.color = "#fff")}
        >
          Jobs
        </a>
        <a
          href="/companies"
          style={{
            color: "#fff",
            margin: "0 1rem",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseOver={e => (e.target.style.color = "#ffd600")}
          onMouseOut={e => (e.target.style.color = "#fff")}
        >
          Companies
        </a>
        <a
          href="/about"
          style={{
            color: "#fff",
            margin: "0 1rem",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseOver={e => (e.target.style.color = "#ffd600")}
          onMouseOut={e => (e.target.style.color = "#fff")}
        >
          About
        </a>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#bbdefb" }}>
        &copy; {new Date().getFullYear()} JobBoard. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;