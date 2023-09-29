import React from "react";
import "./AccountLayout.scss";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Profile from "../../profile/Profile";
import BredCrumbs from "../../bredcrumbs/BredCrumbs";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AccountLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BredCrumbs />
      <div className="container section accountlayout">
        <Profile />
        {<Outlet />}
      </div>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
};

export default AccountLayout;
