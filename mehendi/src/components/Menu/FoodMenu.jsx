import React, { useState } from "react";
import BackButton from "../BackButton";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food5.jpg";
import food6 from "../../assets/food6.jpg";
import food7 from "../../assets/food7.jpg";

export const FoodMenu = () => {
  const images = [food1, food2, food3,food4,food5,food6,food7];
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
      {/* Light Brown & Black Animated Gradient */}
      <style>
        {`
          @keyframes lightBrownBlack {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .light-brown-black-gradient {
            background: linear-gradient(-45deg, #b08968, #7f5539, #000000, #a47148);
            background-size: 300% 300%;
            animation: lightBrownBlack 20s ease infinite;
          }
        `}
      </style>

      <div
        className="light-brown-black-gradient"
        style={{
          paddingTop: "60px",
          textAlign: "center",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <BackButton to="/menu" />
        <h2>Food Menu</h2>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Dish ${currentIndex + 1}`}
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
