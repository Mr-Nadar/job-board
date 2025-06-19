import React from "react";
import { useJobs } from "../context/JobContext";
const Applications = () => {
  const { jobs, applications } = useJobs();

  const appliedJobs = applications
    .map((app) => jobs.find((job) => job.id === app.jobId))
    .filter(Boolean);

  return (
    <section>
      <h2>My Applications</h2>
      {appliedJobs.length === 0 ? (
        <div>No jobs applied for yet.</div>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.id}>
            <h4>
              {job.title} at {job.company}
            </h4>
          </div>
        ))
      )}
    </section>
  );
};

export default Applications;