import React, { useEffect, useRef } from "react";
import "./Skill.css";
import skill1 from "../assets/html-5.png";
import skill2 from "../assets/css-3.png";
import skill3 from "../assets/java-script.png";
import skill4 from "../assets/react.png";
import skill5 from "../assets/bootstrap.png";
import skill6 from "../assets/nodejs.png";

import "aos/dist/aos.css";

function Skill() {
  const skills = [
    { name: "HTML-5", icon: skill1, desc: "Semantic and accessible web structure", level: 95 },
    { name: "CSS-3", icon: skill2, desc: "Modern, responsive, and adaptive styling", level: 90 },
    { name: "JavaScript", icon: skill3, desc: "Dynamic, interactive, and functional web experiences", level: 85 },
    { name: "React", icon: skill4, desc: "Efficient, component-based UI development", level: 88 },
    { name: "Bootstrap", icon: skill5, desc: "Responsive design with prebuilt UI components", level: 80 },
    { name: "Node.js", icon: skill6, desc: "Scalable, server-side JavaScript runtime", level: 75 },
  ];

  const progressBarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute("data-level") + "%";
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const getLevelText = (level) => {
    if (level >= 90) return "Advanced";
    if (level >= 75) return "Proficient";
    return "Intermediate";
  };

  return (
    <section id="skill" className="skill-section">
      <h1 className="skill-title">
        <span className="col short"></span>
        <span className="col medium"></span>
        <span className="col tall"></span>
        My Skills
        <span className="col tall"></span>
        <span className="col medium"></span>
        <span className="col short"></span>
      </h1>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 100}  className="skill-card"  key={skill.name}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
            <div className="skill-progress">
              <div 
                ref={el => progressBarsRef.current[index] = el}
                className="skill-progress-bar" 
                data-level={skill.level}
              ></div>
            </div>
            <div className="skill-level">{getLevelText(skill.level)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;