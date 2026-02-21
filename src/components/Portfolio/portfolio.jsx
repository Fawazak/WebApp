import { useEffect, useState, useRef } from "react";
import "./portfolio.css";
import data from "../../data/projects";

const Portfolio = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseOver = (e) => {
    setTimeout(() => e.target.play(), 100);
  };
  const handleMouseOut = (e) => e.target.load();

  return (
    <section id="projects" className="portfolio-section" ref={ref}>
      <div className={`portfolio-header ${visible ? "visible" : ""}`}>
        <span className="portfolio-tag">What I've built</span>
        <h2 className="portfolio-heading">
          My <span className="portfolio-accent">Projects</span>
        </h2>
      </div>

      <div className="hscroll-wrap">
        <div className="hscroll-fade-right" />

        <div className="hscroll-track">
          {data.map((project, id) => (
            <div className="project-card" key={id}>
              {/* Visual / video */}
              <div className="project-visual">
                <video
                  className="project-video"
                  poster={project.imageSrc}
                  src={project.vidSrc}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  muted
                />
                {/* <div className="project-num">0{id + 1}</div> */}
              </div>

              {/* Content */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-skills">
                  {project.skills.map((skill, sid) => (
                    <span className="skill-pill" key={sid}>{skill}</span>
                  ))}
                </div>

                {/* <a
                  className="project-link"
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;