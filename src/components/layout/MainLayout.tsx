import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  // Hide navbar & footer on login page
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
