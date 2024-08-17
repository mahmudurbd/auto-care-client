import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default Root;
