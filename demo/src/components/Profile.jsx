import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5faff" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)", width: 350, textAlign: "center" }}>
        <h2 style={{ color: "#1976d2" }}>Profile</h2>
        <div style={{ margin: "1rem 0" }}><strong>Name:</strong> {user.name}</div>
        <div style={{ margin: "1rem 0" }}><strong>Email:</strong> {user.email}</div>
        <button onClick={() => { logout(); navigate("/login"); }} style={{ width: "100%", background: "#1976d2", color: "#fff", border: "none", borderRadius: "8px", padding: "1rem", fontWeight: 700, fontSize: "1.1rem", marginTop: "1.5rem" }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;