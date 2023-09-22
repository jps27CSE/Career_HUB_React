import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob.jsx/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [lengthItems, setLengthItems] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, [lengthItems]);
  return (
    <div>
      <h1 className="text-4xl text-center ">Featured Jobs</h1>
      <p className="text-xl text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-2 mt-5 mb-5 gap-2">
        {featuredJobs.slice(0, lengthItems).map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>

      <div className="flex justify-center mb-2">
        <button
          onClick={() => setLengthItems(featuredJobs.length)}
          className="btn btn-primary"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
