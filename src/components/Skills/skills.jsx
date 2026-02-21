import { useEffect, useState, useRef } from "react";
import "./skills.css";
import data from "../../data/skillset";

const Skills = () => {
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

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className={`skills-header ${visible ? "visible" : ""}`}>
        <span className="skills-tag">What I work with</span>
        <h2 className="skills-heading">
          My <span className="skills-accent">Skills</span>
        </h2>
      </div>

      {/* Infinite scroll track — duplicated for seamless loop */}
      <div className="skills-carousel-wrap">
        <div className="skills-fade-left" />
        <div className="skills-fade-right" />

        <div className="skills-track">
          {[...data, ...data].map((skill, id) => (
            <div className="skill-card" key={id}>
              <img src={skill.imageSrc} alt={skill.title} className="skill-img" />
              <span className="skill-label">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;