import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Professional portrait"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend Development" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                Specializing in React.js and React Native, I create responsive and performant web and mobile applications. 
                My focus is on delivering seamless user experiences across all platforms while maintaining clean, maintainable code.
              </p>
              <p>
                With a keen eye for design, I create intuitive and engaging user interfaces. 
                I combine modern design principles with user-centered approaches to build applications that are both beautiful and functional.
              </p>
              <p>
                I optimize applications for speed and efficiency, ensuring fast load times and smooth interactions. 
                My expertise includes code splitting, lazy loading, and implementing best practices for optimal performance.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};