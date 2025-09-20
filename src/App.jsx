import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Header from "./Header";
import '@fortawesome/fontawesome-free/css/all.min.css';

// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { scrollYProgress } = useScroll();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
       mirror: true    
    });
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #6e48aa, #4776E6, #9d50bb)",
          transformOrigin: "0%",
          zIndex: 9999,
          borderRadius: "0 8px 8px 0",
        }}
      />

 

      <Header />
    </>
  );
}

export default App;
