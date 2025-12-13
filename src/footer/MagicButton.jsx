import React, { useState } from "react";
import "./MagicButton.css";

function MagicButton() {
  const [showCard, setShowCard] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [noStyle, setNoStyle] = useState({
    position: "relative",
    left: "0px",
    top: "0px",
  });
  const [noText, setNoText] = useState("No");

  const messages = ["Are you sure?", "Please?", "Try again!", "Click Yes!"];

  const handleYes = (e) => {
    setShowCard(false);
    setShowThanks(true);

    // hearts
    for (let i = 0; i < 12; i++) {
      createHeart(e.clientX, e.clientY);
    }

    // auto hide thank you after 3 seconds
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 120);
    const randomY = Math.random() * (window.innerHeight - 60);

    setNoStyle({
      position: "fixed",
      left: randomX + "px",
      top: randomY + "px",
    });

    setNoText(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <>
      {showCard && (
        <div className="card-overlay">
          <div className="box">
            <h1>Do you like me?</h1>

            <div className="buttons">
              <button className="yes-btn" onClick={handleYes}>
                Yes ❤️
              </button>

              <button
                className="no-btn"
                style={noStyle}
                onMouseEnter={handleNoHover}
              >
                {noText}
              </button>
            </div>
          </div>
        </div>
      )}

      {showThanks && <div className="thank-you">Thank you! ❤️</div>}
    </>
  );
}

export default MagicButton;

/* ❤️ Heart creator */
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  const offsetX = (Math.random() - 0.5) * 100;
  const offsetY = (Math.random() - 0.5) * 100;

  heart.style.left = x + offsetX + "px";
  heart.style.top = y + offsetY + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}
