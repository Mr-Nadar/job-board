import React, { useState } from "react";
import { useJobs } from "../context/JobContext";

const Jobs = () => {
  const { jobs, applications, applyToJob } = useJobs();
  const [showApply, setShowApply] = useState(null); // job id or null
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleApply = (jobId) => {
    setShowApply(jobId);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    applyToJob(job.id, form);
    setShowApply(null);
  };

  const hasApplied = (jobId) =>
    applications.some((app) => app.jobId === jobId);

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
        minHeight: "100vh",
        padding: "4rem 0 3rem 0",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "2.2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Available Jobs
        </h2>
        {jobs.length === 0 ? (
          <div style={{ color: "#fff", textAlign: "center" }}>No jobs posted yet.</div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              style={{
                background: "rgba(255,255,255,0.98)",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)",
                padding: "2rem",
                marginBottom: "2rem",
                color: "#1976d2",
                position: "relative",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {job.title}
              </h3>
              <div style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                {job.company} &mdash; <span style={{ color: "#42a5f5" }}>{job.location}</span>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "#e3f2fd",
                    color: "#1976d2",
                    borderRadius: "6px",
                    padding: "0.3rem 0.8rem",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginRight: "0.5rem",
                  }}
                >
                  {job.type}
                </span>
              </div>
              <div style={{ color: "#333", fontSize: "1.05rem", marginBottom: "1rem" }}>{job.description}</div>
              {hasApplied(job.id) ? (
                <span
                  style={{
                    background: "#ffd600",
                    color: "#1976d2",
                    fontWeight: 700,
                    borderRadius: "8px",
                    padding: "0.5rem 1.2rem",
                    marginBottom: "0.5rem",
                    display: "inline-block",
                  }}
                >
                  Applied
                </span>
              ) : (
                <button
                  style={{
                    background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.7rem 2rem",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                    transition: "background 0.2s",
                    marginBottom: "0.5rem",
                  }}
                  onClick={() => handleApply(job.id)}
                >
                  Apply
                </button>
              )}
              {showApply === job.id && (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#f5faff",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    marginTop: "1rem",
                    boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                  }}
                >
                  <h4 style={{ color: "#1976d2", marginBottom: "1rem" }}>Apply for {job.title}</h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      marginBottom: "0.8rem",
                      borderRadius: "8px",
                      border: "1px solid #bbdefb",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      marginBottom: "0.8rem",
                      borderRadius: "8px",
                      border: "1px solid #bbdefb",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Why are you a good fit?"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      marginBottom: "0.8rem",
                      borderRadius: "8px",
                      border: "1px solid #bbdefb",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "vertical",
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
                      padding: "0.7rem 2rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                      transition: "background 0.2s",
                    }}
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Jobs;