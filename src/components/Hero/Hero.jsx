import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:1997akshay04@gmail.com?subject=Contact from Portfolio";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Akshay Kumar Gupta</h1>
        <p className={styles.description}>
          I'm a Software Developer with 1+ years of experience using React and
          React Native. Reach out if you'd like to learn more!
        </p>
        {/* <button 
          onClick={handleContactClick}
          className={styles.contactBtn}
        >
          Contact Me
        </button> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
