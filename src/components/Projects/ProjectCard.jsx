import React, { useState } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    project.imageSrc,
    ...(project.additionalImages || [])
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div 
        className={styles.container}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={getImageUrl(project.imageSrc)}
          alt={project.title}
          className={styles.image}
        />
        {/* <span className={styles.category}>{project.category}</span> */}
          <span className={styles.category}>
    {Array.isArray(project.category)
      ? project.category.map((cat) => cat.toUpperCase()).join(" / ")
      : project.category.toUpperCase()}
  </span>


        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <div className={styles.carouselContainer}>
              <button 
                className={styles.carouselButton}
                onClick={handlePrevImage}
              >
                ‹
              </button>
              <img
                src={getImageUrl(projectImages[currentImageIndex])}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className={styles.modalImage}
              />
              <button 
                className={styles.carouselButton}
                onClick={handleNextImage}
              >
                ›
              </button>
            </div>
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {projectImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
