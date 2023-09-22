import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob.jsx/FeaturedJob";

const FeaturedJobs = () => {
  const [originalFeaturedJobs, setOriginalFeaturedJobs] = useState([]);
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [lengthItems, setLengthItems] = useState(4);
  const [searchField, setSearchField] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchField.length === 0) {
      setFeaturedJobs(originalFeaturedJobs);
    } else {
      const filterJobs = featuredJobs.filter((job) =>
        job.job_title.toLowerCase().includes(searchField.toLowerCase())
      );
      setFeaturedJobs(filterJobs);
    }
  };

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setOriginalFeaturedJobs(data), setFeaturedJobs(data);
      });
  }, [lengthItems]);
  return (
    <div>
      <h1 className="text-4xl text-center ">Featured Jobs</h1>
      <p className="text-xl text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <form
        onSubmit={handleSearchSubmit}
        className="flex justify-center mt-2 mb-2"
      >
        <input
          onChange={(e) => setSearchField(e.target.value)}
          className="border-2 p-2 "
          type="text"
          placeholder="Search"
        />
        <input type="submit" className="btn btn-primary" />
      </form>

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
