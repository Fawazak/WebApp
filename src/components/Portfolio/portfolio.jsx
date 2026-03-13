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
    const video = e.target;
    setTimeout(() => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }, 100);
  };

  const handleMouseOut = (e) => {
    const video = e.target;
    video.pause();
    video.load();
  };

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
          {data.map((project, id) => {
            const inner = (
              <>
                <div className="project-visual">
                  <video
                    className="project-video"
                    poster={project.imageSrc}
                    src={project.vidSrc}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    muted
                  />
                  {project.liveUrl && (
                    <div className="project-live-badge">Live ↗</div>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-skills">
                    {project.skills.map((skill, sid) => (
                      <span className="skill-pill" key={sid}>{skill}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.source && (
                      <a
                        className="project-link"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub →
                      </a>
                    )}
                    
                    
                  </div>
                </div>
              </>
            );

            return project.liveUrl ? (
              <a
                key={id}
                className="project-card"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={id} className="project-card">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;