import UserImage from "../../../assets/images/user.png";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-2 p-2">
        <div className="cols-span-1  ">
          <div>
            <h1 className="text-6xl">One Step Closer To Your Dream Job</h1>
          </div>
          <div>
            <p className="text-xl mt-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="mt-10">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="cols-span-1 flex justify-end  ">
          <img className="w-50 h-96" src={UserImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
