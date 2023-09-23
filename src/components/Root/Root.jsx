import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
