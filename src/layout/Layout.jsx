import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import BredCrumbs from "../components/bredcrumbs/BredCrumbs";
import {useLocation} from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Navbar />
      {location.pathname !== "/" ? <BredCrumbs /> : null}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
