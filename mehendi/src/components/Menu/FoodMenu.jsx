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
  const images = [food1, food2, food3, food4, food5, food6, food7];
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

          .arrow-btn {
            background: transparent !important;
            padding: 10px 14px;
            border-radius: 0;
            color: #fff;
            border: none;
            font-size: 28px;
            cursor: pointer;
            box-shadow: none !important;
            transition: color 0.3s ease-in-out;
            outline: none !important;
            user-select: none;
          }

          .arrow-btn:hover {
            color: #bfa84b;
          }

          .arrow-btn:focus,
          .arrow-btn:focus-visible,
          .arrow-btn:active {
            background: transparent !important;
            color: #bfa84b !important;
            outline: none !important;
            box-shadow: none !important;
          }

          @media (max-width: 600px) {
            .arrow-container {
              flex-direction: row;
              justify-content: center;
              gap: 20px;
              margin-top: 10px;
              position: static !important;
              transform: none !important;
            }

            .arrow-btn {
              position: static !important;
              transform: none !important;
              font-size: 24px !important;
              padding: 10px 12px !important;
            }
          }

          .responsive-image {
            width: 90vw;
            max-width: 900px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            object-fit: contain;
            display: block;
            margin: 0 auto;
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
        <h2>Food</h2>

        <div style={{ marginTop: "20px", position: "relative" }}>
          <img
            src={images[currentIndex]}
            alt={`Dish ${currentIndex + 1}`}
            className="responsive-image"
          />

          {/* Arrows (Desktop) */}
          <div
            className="arrow-container"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
              transform: "translateY(-50%)",
            }}
          >
            <button
              onClick={prevImage}
              className="arrow-btn"
              aria-label="Previous Image"
            >
              ⟨
            </button>
            <button
              onClick={nextImage}
              className="arrow-btn"
              aria-label="Next Image"
            >
              ⟩
            </button>
          </div>
        </div>

        {/* Image Counter */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
