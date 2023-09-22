import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
