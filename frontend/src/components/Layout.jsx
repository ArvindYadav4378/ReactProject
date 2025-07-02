import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;