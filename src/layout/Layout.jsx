import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import BredCrumbs from "../components/bredcrumbs/BredCrumbs";
import { useLocation } from "react-router-dom";
import  { Toaster } from "react-hot-toast";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position = "top-right" />
      <Header />
      <Navbar />
      {location.pathname !== "/" ? <BredCrumbs /> : null}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
