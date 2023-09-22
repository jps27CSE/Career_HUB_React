import { useEffect, useState } from "react";
import JobCategory from "./JobCategory/JobCategory";

const JobCategoryList = () => {
  const [jobCategoryList, setJobCategoryList] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategoryList(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">Job Category List</h1>
      <p className="text-xl text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-4 mt-5 mb-5">
        {jobCategoryList.map((job) => (
          <JobCategory job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
