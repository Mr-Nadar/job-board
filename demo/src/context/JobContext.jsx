import React, { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([
    
  ]);
  const [applications, setApplications] = useState([]);

  const addJob = (job) => {
    setJobs((prev) => [{ ...job, id: Date.now() }, ...prev]);
  };

  const applyToJob = (jobId, applicationData) => {
    setApplications((prev) => [
      ...prev,
      { jobId, ...applicationData, appliedAt: new Date() },
    ]);
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