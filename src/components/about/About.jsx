import React from "react";
import styles from "./About.module.scss";
import SecondaryButton from "../../utils/buttons/secondarybutton/SecondaryButton";

const About = ({showButton}) => {
  return (
    <div className="container">
      <div className={styles["about__content"]}>
        <div className={styles["about__content--left"]}>
          <img
            src="https://s3-alpha-sig.figma.com/img/754e/f220/6125e68f344e6b26d5b0e7816a0e4381?Expires=1693785600&Signature=hiuIlGrS1hhzBl3lWiBPgvWJPvs4mHAryZ-weEMgH8kt0v19be0bgyQt-hb1P~BYhdRYHxk1-47ngeeGVmn-tQ4EmUUF2MZA785Akb3OgqgG~3UB~e8XYozGdKm9FhXpDDV1qEdUaQm10~9B6Q8OUZ8u4vltYVqVu2ZRL9Pf6K~89PbmcvqcAMYVZaHa6bgrVQ14KSOqMVTAgvRwQPoNY5HzbTNpgU4xM2o6uxckHAT6i-mB6TreyOzcvMR4lq6Jy~I0d77LjKf9ezv4v0C59sNUHNPTHzRrZP5xNoDOXmB89ZzP1HR4z5CFMJoZCLr8~N3JeP~sn-6iSCM070ypDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="aboutimage"
          />
        </div>
        <div className={styles["about__content--right"]}>
          <div className={styles["about__content--text"]}>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. Temporibus autem
              quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat. Itaque earum rerum hic
              tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat.
            </p>
          </div>
          <div className={styles["about__content--button btn"]}>
            <SecondaryButton>LEARN MORE</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
