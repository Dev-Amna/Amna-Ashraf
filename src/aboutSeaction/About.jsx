import React from 'react'
import aboutImg from "../assets/amna.jpeg"
import "./about.css"
import { MyButton } from '../button/Button'
import AmnaCV from "../assets/Amna_Ashraf_CV.pdf"

function About() {
  return (
    <>
      <section id='about' className='about-section'>
        <h1 className="about-title">

          <span className="col short"></span>
          <span className="col medium"></span>
          <span className="col tall"></span>
          About Me
          <span className="col tall"></span>
          <span className="col medium"></span>
          <span className="col short"></span>
        </h1>

        <div className="about-container">
          {/* Left side  */}

          <div className="about-img" data-aos="fade-right">
            <img src={aboutImg} alt="Amna" />
          </div>
          {/* Right side  */}
          <div className="about-text" data-aos="fade-left" >
            <p className='Amna_CV'>
              <h2>Who I am 😎</h2>
              Hi! I’m <strong>Amna Ashraf</strong>, a passionate web developer who enjoys building clean, responsive, and user-friendly websites.
              My journey began around 2022–2023, and over time I’ve grown more confident in creating projects that bring ideas to life on the web.

              Right now, I’m exploring <b>React</b>, moving toward backend development, and learning modern UI design as I work toward becoming a <strong>Full-Stack Developer</strong>.
              My dream is to grow into a skilled Software Engineer who can handle both the creative and technical sides of applications.

              Coding 💻 feels like a mix of art and problem-solving for me. Every project is a chance to experiment, learn something new, and sharpen my skills.

              Outside of coding, I love photography, experimenting with creative ideas, and exploring new technologies that spark curiosity 🚀.
              I also enjoy spending time with friends, discovering fresh perspectives, and learning from every challenge I take on.
            </p>



            <MyButton style={{
              width: "200px",
              textDecoration: "none"
            }} as="a" href={AmnaCV} download>
              Download CV <i className="fa-solid fa-download"></i>
            </MyButton>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
