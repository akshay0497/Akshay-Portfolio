import React, { useState } from "react";

import styles from "./Projects.module.css";

import { projects } from "../../constants";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "web", "app", "ai"];
  
  const filteredProjects = projects.filter((project) => {
    // const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesCategory =
  selectedCategory === "all" ||
  (Array.isArray(project.category)
    ? project.category.includes(selectedCategory)
    : project.category === selectedCategory);

    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projects}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
