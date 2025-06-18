import React from "react";
import { Link } from "react-router-dom";

const NavBar1 = () => (
  <nav
    style={{
      background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.1)",
      padding: "0 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      margin: 0,
      borderRadius: 0,
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "2px",
          marginRight: "1.5rem",
          textDecoration: "none",
        }}
      >
        <span style={{ color: "#ffd600" }}>●</span> JobBoard
      </Link>
      <div>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/jobs" style={navLinkStyle}>
          Jobs
        </Link>
        <Link to="/add-job" style={navLinkStyle}>
          Add Job
        </Link>
        <Link to="/companies" style={navLinkStyle}>
          Companies
        </Link>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/applications" style={navLinkStyle}>
          Applications
        </Link>
      </div>
    </div>
  </nav>
);

const navLinkStyle = {
  color: "#fff",
  marginRight: "2rem",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1.1rem",
  transition: "color 0.2s",
};

export default NavBar1;