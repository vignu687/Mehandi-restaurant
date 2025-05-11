import React, { useState } from "react";
import BackButton from "../BackButton";
import shisha2 from "../../assets/shisha.jpg";
import shisha1 from "../../assets/shisha1.jpg";
import shisha3 from "../../assets/shisha4.jpeg";

const ShishaMenu = () => {
  const images = [shisha1, shisha2, shisha3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Animated Gold & Black Gradient Background */}
      <style>
        {`
          @keyframes goldBlackGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .gold-black-gradient {
            background: linear-gradient(-45deg, #000000, #4b3b0a, #bfa84b, #000000);
            background-size: 300% 300%;
            animation: goldBlackGradient 20s ease infinite;
          }
        `}
      </style>

      <div
        className="gold-black-gradient"
        style={{
          paddingTop: "60px",
          textAlign: "center",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <BackButton to="/menu" />
        <h2>Shisha</h2>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Shisha ${currentIndex + 1}`}
            style={{
              width: "80vw",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            }}
          />

          {/* Left Arrow */}
          <button onClick={prevImage} style={{ ...arrowButton, left: "-50px" }}>
            ⟨
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            style={{ ...arrowButton, right: "-50px" }}
          >
            ⟩
          </button>
        </div>
        <div
          style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const arrowButton = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "transparent",
  color: "white",
  border: "none",
  fontSize: "32px",
  cursor: "pointer",
  zIndex: 1,
};

export default ShishaMenu;
