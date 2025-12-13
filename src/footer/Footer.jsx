import React, { useState } from "react";
import { MyButton } from "../button/Button";
import MagicButton from "./MagicButton";
import "./Footer.css";

function Footer() {
  const [showMagic, setShowMagic] = useState(false);

  const handleMagicClick = () => {
    setShowMagic(true);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Made by Amna Ashraf</h3>
        <p>© 2025 All rights reserved.</p>
        <div className="magic-container">
          {!showMagic && (
            <MyButton className="magic-button" onClick={handleMagicClick}>
              See Magic
            </MyButton>
          )}

          {showMagic && <MagicButton />}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
