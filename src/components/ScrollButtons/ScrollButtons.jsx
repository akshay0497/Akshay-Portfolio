import React, { useState, useEffect } from "react";
import styles from "./ScrollButtons.module.css";
import { getImageUrl } from "../../utils";

export const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0;

      // Show scroll up button when scrolled down more than half the viewport
      setShowScrollUp(scrollPosition > windowHeight / 2);

      // Show scroll down button only when we're not at the bottom
      // Account for footer height to hide the button when we reach the footer
      setShowScrollDown(scrollPosition + windowHeight < documentHeight - footerHeight - 100);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    const footer = document.querySelector('footer');
    const footerTop = footer?.offsetTop || document.documentElement.scrollHeight;
    
    window.scrollTo({
      top: footerTop - window.innerHeight + 100,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.scrollButtons}>
      {showScrollUp && (
        <button
          className={`${styles.scrollButton} ${styles.scrollUp}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img src={getImageUrl("scroll/scroll.gif")} alt="Scroll up" style={{ transform: 'rotate(0deg)' }} />
        </button>
      )}
      {showScrollDown && (
        <button
          className={`${styles.scrollButton} ${styles.scrollDown}`}
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
        >
          <img src={getImageUrl("scroll/scroll.gif")} alt="Scroll down" style={{ transform: 'rotate(180deg)' }} />
        </button>
      )}
    </div>
  );
}; 