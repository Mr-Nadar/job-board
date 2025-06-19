import React, { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Acme Corp",
      location: "Remote",
      type: "Full Time",
      description: "Build beautiful UIs with React.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Beta LLC",
      location: "New York",
      type: "Full Time",
      description: "Work on scalable Node.js APIs.",
    },
  ]);
  const [applications, setApplications] = useState([]);

  const addJob = (job) => {
    setJobs((prev) => [{ ...job, id: Date.now() }, ...prev]);
  };

  const applyToJob = (jobId, applicationData) => {
    setApplications((prev) =>
      prev.some((app) => app.jobId === jobId)
        ? prev
        : [...prev, { jobId, ...applicationData, appliedAt: new Date() }]
    );
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, applications, applyToJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobContext);
}