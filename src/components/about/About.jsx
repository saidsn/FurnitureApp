import React, { useEffect, useState } from "react";
import AboutService from "../../APIs/services/AboutService";
import styles from "./About.module.scss";
import SecondaryButton from "../../utils/buttons/secondarybutton/SecondaryButton";
import Title from "../title/Title";

const About = ({ showButton }) => {
  const [about, setAbout] = useState("");

  const GetAllAbouts = async () => {
    setAbout(await AboutService.getAllAbout());
  };

  useEffect(() => {
    GetAllAbouts();
  },[]);

  return (
    <section className={`${styles.about} section`}>
      <div className="container">
        <Title>
          <h3 className="title__head">AOBUT US</h3>
        </Title>
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
