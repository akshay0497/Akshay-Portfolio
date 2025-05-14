import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Get in Touch</h3>
          <div className={styles.contactItem}>
            <img src={getImageUrl("footer/gmail.png")} alt="Email" className={styles.icon} />
            <a 
              href="mailto:1997akshay04@gmail.com?subject=Contact from Portfolio" 
              className={styles.link}
            >
              1997akshay04@gmail.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <img src={getImageUrl("footer/call.png")} alt="Phone" className={styles.icon} />
            <a href="tel:+91-8668855737" className={styles.link}>
              +91 8668855737  
            </a>
          </div>
          <div className={styles.contactItem}>
            <img src={getImageUrl("footer/placeholder.png")} alt="Location" className={styles.icon} />
            <span className={styles.text}>Kanpur, Uttar Pradesh, India</span>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <h3 className={styles.title}>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a 
              href="https://www.linkedin.com/in/akshay0497" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={getImageUrl("footer/linkedin.png")} alt="LinkedIn" />
            </a>
            <a 
              href="https://www.github.com/akshay0497" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={getImageUrl("footer/github.png")} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h3 className={styles.title}>Stay Updated</h3>
          <p className={styles.description}>
            Subscribe to my newsletter for the latest updates and insights.
          </p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Akshay Kumar Gupta. All rights reserved.
        </p>
        {/* <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Privacy Policy</a>
          <a href="#" className={styles.legalLink}>Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
}; 