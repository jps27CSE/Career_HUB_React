import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = data.find((jobID) => jobID.id === idInt);

  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;

  return (
    <div className="ml-2">
      <div>
        <h1 className="text-4xl text-center mb-48 mt-5">Job Details</h1>
      </div>
      <div className="grid grid-cols-4 mb-5 ">
        <div className="col-span-3 ">
          <p>
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>

          <p className="mt-2">
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>

          <p className="mt-2">
            <span className="font-bold">Education Requirements: </span>
            <div>{educational_requirements}</div>
          </p>

          <p className="mt-2">
            <span className="font-bold">Experiences: </span>
            <div>{experiences}</div>
          </p>
        </div>

        <div>
          <div className="w-auto h-auto bg-cyan-200 rounded-lg p-2">
            <p className="font-bold">Job Details</p>
            <div className="mt-5">
              <p className="mt-2">
                <span className="font-bold">Salary:</span> {salary} (Per Month)
              </p>
              <p className="mt-2">
                <span className="font-bold">Job Title: </span>
                {job_title}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button className="btn btn-primary "> Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
