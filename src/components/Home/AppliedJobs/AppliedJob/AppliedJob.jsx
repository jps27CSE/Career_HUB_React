import PropTypes from "prop-types";
const AppliedJob = ({ job }) => {
  console.log(job);
  const { id, logo, location, salary, job_type, job_title, remote_or_onsite } =
    job;
  return (
    <div className="w-[1100px] h-[250px] border-2 mb-5 mx-auto">
      <div className="grid grid-cols-3 gap-52">
        <div className="p-5 my-auto ">
          <img src={logo} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold p-5">{job_title}</h1>
          <p></p>
          <div className=" flex gap-2">
            <button className="btn ">{remote_or_onsite}</button>
            <button className="btn ">{job_type}</button>
          </div>
          <div className="flex flex-col mt-2">
            <div>
              <span className="font-bold">Location: </span>
              {location}
            </div>
            <div>
              <span className="font-bold">Salary: </span>
              {salary}
            </div>
          </div>
        </div>
        <div className="p-5 my-auto">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;

AppliedJob.propTypes = {
  job: PropTypes.object,
};
