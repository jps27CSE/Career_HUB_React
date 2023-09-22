import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="w-[550px] h-[370px] border-2 rounded-lg">
      <div>
        <img className="p-7" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-bold p-2">{job_title}</h1>
      </div>
      <div>
        <p className="text-xl p-2">{company_name}</p>
      </div>
      <div className="flex flex-row gap-2 p-2">
        <button className="btn ">{remote_or_onsite}</button>
        <button className="btn">{job_type}</button>
      </div>
      <div className="flex flex-row p-2 gap-2">
        <p>{location}</p>
        <p>Salary : {salary} </p>
      </div>
      <div className="p-2">
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary ">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};
