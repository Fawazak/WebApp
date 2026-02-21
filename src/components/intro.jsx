import { useEffect, useState } from "react";
import "./intro.css";

const TITLES = ["<Software Engineer />", "<Problem Solver />", "<Builder />"];

const Intro = () => {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx]);

  return (
    <div section id = "intro" className="intro-root">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />

      <div className={`glass-card ${visible ? "visible" : ""}`}>
        <div className="card-accent" />

        

        <h1 className="name">
          Fawaz<br />
          <span className="name-accent">Al Khreisha</span>
        </h1>

        <div className="typed-wrap">
          {displayed}
          <span className="cursor" />
        </div>

        <div className="divider" />

        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Intro;
