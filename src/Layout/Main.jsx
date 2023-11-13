import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div className="relative">
      {isLogin || <Navbar />}
      <Outlet></Outlet>
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
