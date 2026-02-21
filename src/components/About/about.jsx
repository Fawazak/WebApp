import { useEffect, useState, useRef } from "react";
import "./about.css";
import sticker from "../../assets/sticker.png";

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className={`about-container ${visible ? "visible" : ""}`}>

        {/* Image side */}
        <div className="about-image-wrap">
          <div className="about-image-glow" />
          <img src={sticker} alt="Fawaz bitmoji" className="about-image" />
        </div>

        {/* Text side */}
        <div className="about-content">
          <span className="about-tag">About Me</span>
          <h2 className="about-heading">
            Building things that <span className="about-accent">matter</span>
          </h2>
          <p className="about-text">
            I'm a recent Software Engineering graduate with experience in both
            front-end and back-end development, and a keen interest in AI and
            Machine Learning. I'm devoted to creating software that is
            impactful, accessible, and user-centric.
          </p>
          <div className="about-divider" />
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            {/* <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Built</span>
            </div> */}
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Curiosity</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;