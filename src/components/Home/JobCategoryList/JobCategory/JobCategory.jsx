import PropTypes from "prop-types";

const JobCategory = ({ job }) => {
  const { logo, category_name, availability } = job;
  return (
    <div className="w-[270px] h-[220px] bg-cyan-100">
      <div>
        <img className="p-5 w-20 m-5" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-2xl p-2">{category_name}</h1>
      </div>
      <div>
        <p className="text-xl p-2">{availability} </p>
      </div>
    </div>
  );
};

export default JobCategory;

JobCategory.propTypes = {
  job: PropTypes.object,
};
