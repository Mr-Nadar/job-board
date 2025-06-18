import React from "react";
import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";

const Applications = () => {
  const { jobs, applications } = useJobs();

  const appliedJobs = applications
    .map((app) => jobs.find((job) => job.id === app.jobId))
    .filter(Boolean);

  const appliedCompanies = Array.from(
    new Set(appliedJobs.map((job) => job.company))
  );

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
        minHeight: "100vh",
        padding: "4rem 0 3rem 0",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "2.2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          My Applications
        </h2>
        <h3 style={{ marginBottom: "1rem" }}>Companies Applied For:</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "2rem",
          }}
        >
          {appliedCompanies.length === 0 ? (
            <li>No applications yet.</li>
          ) : (
            appliedCompanies.map((company) => (
              <li key={company}>
                <Link
                  to={`/companies/${encodeURIComponent(company)}`}
                  style={{
                    color: "#ffd600",
                    textDecoration: "underline",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {company}
                </Link>
              </li>
            ))
          )}
        </ul>
        <h3 style={{ marginBottom: "1rem" }}>Jobs Applied For:</h3>
        {appliedJobs.length === 0 ? (
          <div>No jobs applied for yet.</div>
        ) : (
          appliedJobs.map((job) => (
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
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                {job.title} at {job.company}
              </h4>
              <div style={{ color: "#42a5f5" }}>{job.location}</div>
              <div
                style={{
                  color: "#333",
                  fontSize: "1.05rem",
                }}
              >
                {job.description}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Applications;