import React from "react";
import BredCrumbs from "../../components/bredcrumbs/BredCrumbs";
import Profile from "../../components/profile/Profile";

const ProfilePage = () => {
  return (
    <section className="section">
      <BredCrumbs />
      <Profile />
    </section>
  );
};

export default ProfilePage;
