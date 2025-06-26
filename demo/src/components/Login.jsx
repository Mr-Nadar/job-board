import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(form.email, form.password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5faff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 32,
          boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)",
          width: 350,
        }}
      >
        <h2
          style={{
            color: "#1976d2",
            textAlign: "center",
          }}
        >
          Sign In
        </h2>
        {error && (
          <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Sign In
        </button>
        <div
          style={{
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#1976d2" }}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #bbdefb",
  fontSize: "1rem",
};
const buttonStyle = {
  width: "100%",
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "1rem",
  fontWeight: 700,
  fontSize: "1.1rem",
};

export default Login;