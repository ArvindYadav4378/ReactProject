import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;