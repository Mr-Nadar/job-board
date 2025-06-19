import React, { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const { jobs } = useJobs();
  const location = useLocation();

  // Get search params from URL
  const params = new URLSearchParams(location.search);
  const search = params.get("search") || "";
  const locationFilter = params.get("location") || "";
  const experience = params.get("experience") || "";

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      search === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      locationFilter === "" ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesExperience =
      experience === "" ||
      (job.experience && job.experience.toLowerCase() === experience.toLowerCase());
    return matchesSearch && matchesLocation && matchesExperience;
  });

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
        {filteredJobs.length === 0 ? (
          <div style={{ color: "#888", textAlign: "center", marginTop: "2rem", fontSize: "1.2rem" }}>
            No results found.
          </div>
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
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Jobs;