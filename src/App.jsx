import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { ScrollButtons } from "./components/ScrollButtons/ScrollButtons";
import styles from "./App.module.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : styles.light}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ScrollButtons />
    </div>
  );
}

export default App;
