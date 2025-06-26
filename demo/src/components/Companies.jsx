import React from "react";
import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";

const Companies = () => {
  const { jobs } = useJobs();

  // Get unique company names
  const companies = Array.from(new Set(jobs.map((job) => job.company)));

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
          Top Companies
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem",
          }}
        >
          {companies.length === 0 ? (
            <li>No companies found.</li>
          ) : (
            companies.map((company) => (
              <li
                key={company}
                style={{
                  marginBottom: "1.2rem",
                }}
              >
                <Link
                  to={`/companies/${encodeURIComponent(company)}`}
                  style={{
                    color: "#ffd600",
                    textDecoration: "underline",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  {company}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Companies;