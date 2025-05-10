import React, { useState } from "react";
import BackButton from "../BackButton";
import beverage1 from "../../assets/beverage1.jpg";
import beverage2 from "../../assets/beverage2.jpg";
import beverage3 from "../../assets/beverage3.jpg";


export const WineMenu = () => {
  const images = [beverage1, beverage2, beverage3];
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
      {/* Animated Maroon & Black Gradient Background */}
      <style>
        {`
          @keyframes maroonBlackGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .maroon-black-gradient {
            background: linear-gradient(-45deg, #000000, #3b0a0a, #800000, #000000);
            background-size: 300% 300%;
            animation: maroonBlackGradient 20s ease infinite;
          }
        `}
      </style>

      <div
        className="maroon-black-gradient"
        style={{
          paddingTop: "60px",
          textAlign: "center",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <BackButton to="/menu" />
        <h2>Beverage Menu</h2>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Beverage ${currentIndex + 1}`}
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
          <button onClick={nextImage} style={{ ...arrowButton, right: "-50px" }}>
            ⟩
          </button>
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
