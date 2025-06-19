import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const Search = () => {
  const { jobs } = useJobs();
  const location = useLocation();
  const [query, setQuery] = useState(location.state?.query || "");

  useEffect(() => {
    if (location.state?.query !== undefined) {
      setQuery(location.state.query);
    }
  }, [location.state]);

  // --- UPDATE THIS PART ---
  // Show all jobs if query is empty, otherwise filter
  const filteredJobs =
    query.trim() === ""
      ? jobs
      : jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.company.toLowerCase().includes(query.toLowerCase()) ||
            job.location.toLowerCase().includes(query.toLowerCase()) ||
            job.type.toLowerCase().includes(query.toLowerCase())
        );
  // --- END UPDATE ---

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
          Search Jobs
        </h2>
        <input
          type="text"
          placeholder="Search by title, company, location, or type..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid #bbdefb",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            outline: "none",
          }}
        />
        {filteredJobs.length === 0 ? (
          <div style={{ color: "#fff", textAlign: "center" }}>No jobs found.</div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              style={{
                background: "rgba(255,255,255,0.98)",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)",
                padding: "2rem",
                marginBottom: "2rem",
                color: "#1976d2",
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
              <div style={{ color: "#333", fontSize: "1.05rem" }}>{job.description}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Search;