import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import SecondaryButton from "../../utils/buttons/secondarybutton/SecondaryButton";
import Title from "../title/Title";
import axios from "axios";

const About = ({ showButton }) => {
  const url = "http://localhost:3000";

  const [about, setAbout] = useState("");

  const GetAbout = () => {
    axios.get(`${url}/about`).then((res) => {
      setAbout(res.data);
    });
  };

  useEffect(() => {
    GetAbout();
  });

  return (
    <section id="section">
      <div className="container">
        <Title title="ABOUT US" />
        <div className={styles["about__content"]}>
          <div className={styles["about__content--left"]}>
            <img src={about.image} alt="aboutimage" />
          </div>
          <div className={styles["about__content--right"]}>
            <div className={styles["about__content--text"]}>
              <p>{about.description}</p>
            </div>
            <div className={styles["about__content--button btn"]}>
              {showButton && <SecondaryButton>LEARN MORE</SecondaryButton>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
