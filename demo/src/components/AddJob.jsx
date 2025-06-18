import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
  });
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    addJob(form);
    navigate("/jobs");
  };

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
        minHeight: "100vh",
        padding: "4rem 0 3rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.98)",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)",
          maxWidth: "500px",
          width: "100%",
          padding: "2.5rem 2rem",
        }}
      >
        <h2
          style={{
            color: "#1976d2",
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Post a New Job
        </h2>
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ color: "#1976d2", fontWeight: 500 }}>
            Job Title
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                marginTop: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #bbdefb",
                fontSize: "1rem",
                outline: "none",
              }}
              placeholder="e.g. Frontend Developer"
            />
          </label>
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ color: "#1976d2", fontWeight: 500 }}>
            Company
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                marginTop: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #bbdefb",
                fontSize: "1rem",
                outline: "none",
              }}
              placeholder="e.g. Acme Corp"
            />
          </label>
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ color: "#1976d2", fontWeight: 500 }}>
            Location
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                marginTop: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #bbdefb",
                fontSize: "1rem",
                outline: "none",
              }}
              placeholder="e.g. Remote, New York"
            />
          </label>
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ color: "#1976d2", fontWeight: 500 }}>
            Job Type
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                marginTop: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #bbdefb",
                fontSize: "1rem",
                outline: "none",
                background: "#f5faff",
              }}
            >
              <option value="">Select type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </label>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ color: "#1976d2", fontWeight: 500 }}>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: "100%",
                padding: "0.8rem",
                marginTop: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #bbdefb",
                fontSize: "1rem",
                outline: "none",
                resize: "vertical",
              }}
              placeholder="Describe the job role and requirements..."
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            borderRadius: "8px",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
            transition: "background 0.2s",
            display: "block",
            margin: "0 auto",
          }}
          onMouseOver={e => (e.target.style.background = "#1565c0")}
          onMouseOut={e => (e.target.style.background = "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)")}
        >
          Post Job
        </button>
      </form>
    </section>
  );
};

export default AddJob;