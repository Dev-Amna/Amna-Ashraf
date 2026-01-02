import React from "react";

import "./Footer.css";

function Footer() {


  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Made by Amna Ashraf</h3>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      
      </div>
    </footer>
  );
}

export default Footer;
