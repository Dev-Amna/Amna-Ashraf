import React, { useState, useEffect } from "react";
import Hero from "./hero/Hero";
import Skill from "./skill/Skill";
import "./index.css";
import Contact from "./Contact/Contact";
import Project from "./project/Project";
import About from "./aboutSeaction/About";
import Footer from "./footer/Footer";
import { FaSun, FaMoon } from "react-icons/fa"; 

function Header() {
  
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
const [showMagic, setShowMagic] = useState(false);

  const handleMagicClick = () => {
    setShowMagic(true);
  };
  // Theme handling
  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }

    body.classList.add("theme-transition");
    const timer = setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 500);

    return () => clearTimeout(timer);
  }, [dark]);

  // Auto close sidebar if screen > 700px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll lock when sidebar open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div className="nav">
        {/* Logo + Theme Toggle */}
        <div className="logo-and-theme">
          <div
            className="logo"
           
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #6d188fff, #4776E6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dev
            </span>
            -Amna
          </div>

          <div className="themeBtn">
            <button
              onClick={() => setDark(!dark)}
              style={{
                padding: "0.2rem",
                background: "linear-gradient(to right, #9d50bb, #4776E6)",
              }}
            >
              {dark ? (
                <FaSun className="theme-icon" style={{ fontSize: "28px", color: "#f5f5f5" }} />
              ) : (
                <FaMoon className="theme-icon" style={{ fontSize: "28px", color: "#f5f5f5" }} />
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="navLinks">
          <ul>
            <li><a href="#hero"><i className="fa-solid fa-house"></i> Home</a></li>
            <li><a href="#about"><i className="fa-solid fa-circle-info"></i> About</a></li>
            <li><a href="#skill"><i className="fa-solid fa-gear"></i> Skills</a></li>
            <li><a href="#project"><i className="fa-solid fa-briefcase"></i> Projects</a></li>
            <li className="style-btn"><a href="#contact"><i className="fa-solid fa-phone "></i> Contact Me</a></li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className="mobileMenuToggle">
          {!menuOpen ? (
            <i
              className="fa-solid fa-bars menuIcon"
              onClick={() => setMenuOpen(true)}
              style={{ fontSize: '28px', color: '#f5f5f5', cursor: 'pointer' }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark closeIcon"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '28px', color: '#f5f5f5', cursor: 'pointer' }}
            ></i>
          )}
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Sidebar for mobile */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skill" onClick={handleLinkClick}>Skill</a></li>
          <li><a href="#project" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>

      {/* Background bubbles */}
      <div className="bubbles">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Header;
