import React from "react";
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router-dom";
import BredCrumbs from "../../bredcrumbs/BredCrumbs";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Headers from "../../headers/Headers";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position="top-right" />
      <Headers/>
      {location.pathname !== "/" ? <BredCrumbs /> : null}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
