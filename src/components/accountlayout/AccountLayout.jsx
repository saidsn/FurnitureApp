import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Profile from "../profile/Profile";
import BredCrumbs from "../bredcrumbs/BredCrumbs";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BredCrumbs />
      <div className="container section center"
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "15rem",
          flexWrap: "wrap",
        }}
      >
        <Profile />
        {<Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;
