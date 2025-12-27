import React from "react";
import "./project.css";
import { motion } from "framer-motion";
import pro1 from "../assets/project-img/rest-countries.jpg";
import pro2 from "../assets/project-img/age-calculator-app.jpg";
import pro3 from "../assets/project-img/contact-form.jpg";
import pro4 from "../assets/project-img/Interactive-card-details-form.jpg";
import pro5 from "../assets/project-img/todo-app.jpg";
import pro6 from "../assets/project-img/Rocks-Paper-Scissors-.png";
import pro7 from "../assets/project-img/Simon-Says-Game.png";
import pro8 from "../assets/project-img/Calculator-app.jpg";

function Project() {
  const projects = [
    {
      img: pro1,
      liveDemo:
        "https://dev-amna.github.io/REST-Countries-API-with-color-theme-switcher/",
      code: "https://github.com/Dev-Amna/REST-Countries-API-with-color-theme-switcher",
    },
    {
      img: pro2,
      liveDemo: "https://dev-amna.github.io/Age-calculator-app/",
      code: "https://github.com/Dev-Amna/Age-calculator-app",
    },
    {
      img: pro3,
      liveDemo: "https://dev-amna.github.io/Contact-form/",
      code: "https://github.com/Dev-Amna/Contact-form",
    },
    {
      img: pro4,
      liveDemo: "https://dev-amna.github.io/Interactive-card-details-form/",
      code: "https://github.com/Dev-Amna/Contact-form",
    },
    {
      img: pro5,
      liveDemo: "https://dev-amna.github.io/Todo--App/",
      code: "https://github.com/Dev-Amna/Todo--App",
    },
    {
      img: pro6,
      liveDemo: "https://dev-amna.github.io/Rocks-Paper-Scissors-/",
      code: "https://github.com/Dev-Amna/Rocks-Paper-Scissors-",
    },
    {
      img: pro7,
      liveDemo: "https://dev-amna.github.io/Simon-Says-Game/",
      code: "https://github.com/Dev-Amna/Simon-Says-Game",
    },
    {
      img: pro8,
      liveDemo: "https://dev-amna.github.io/Calculator-app/",
      code: "https://github.com/Dev-Amna/Calculator-app",
    },
  ];

  return (
    <section id="project" className="project-section">
      <h1 className="project-title">
        <span className="col short"></span>
        <span className="col medium"></span>
        <span className="col tall"></span>
        My Projects
        <span className="col tall"></span>
        <span className="col medium"></span>
        <span className="col short"></span>
      </h1>

      <motion.div whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -2700 }}
        >
          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-image">
                <img src={project.img} alt="Project Preview" />
              </div>

              <div className="card-buttons">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live-btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn code-btn"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}

          {/* SEE MORE PROJECTS CARD */}
          <motion.a
            href="https://my-project-list-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card see-more-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="see-more-content">
              <span className="plus-icon">＋</span>
              <p>See more projects</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Project;
