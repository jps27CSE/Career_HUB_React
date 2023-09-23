import { useEffect, useState } from "react";
import { getStoreData } from "../../../utils/LocalStorage";
import AppliedJob from "./AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [AppJobs, setAppJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(AppJobs);
    } else if (filter === "remote") {
      const remoteJobs = AppJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "on-site") {
      const onSite = AppJobs.filter((job) => job.remote_or_onsite === "Onsite");
      setDisplayJobs(onSite);
    }
  };

  const handleClear = () => {
    localStorage.clear();
    setAppJobs([]);
    setDisplayJobs([]);
  };

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storeJobs = getStoreData();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storeJobs.includes(job.id));
      setAppJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center ">Applied Jobs</h1>
      </div>
      <div className="flex justify-center mt-5 ">
        <details className="dropdown mb-5">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("on-site")}>
              <a>On-Site</a>
            </li>
          </ul>
        </details>
        <div>
          <button
            onClick={handleClear}
            className="btn btn-primary my-auto mt-1 ml-2"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
