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
    <div style={{ position: "relative", overflow: "visible" }}>
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

          .arrow-btn {
            background: none !important;
            color: white;
            border: none;
            font-size: 28px;
            cursor: pointer;
            padding: 10px 14px;
            transition: color 0.3s ease;
            user-select: none;
            outline: none !important;
            box-shadow: none !important;
          }

          .arrow-btn:hover {
            color: #bfa84b;
          }

          .arrow-btn:focus,
          .arrow-btn:active,
          .arrow-btn:focus-visible {
            background: none !important;
            color: #bfa84b !important;
            outline: none !important;
            box-shadow: none !important;
          }

          .arrow-container {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            padding: 0 10px;
          }

          @media (max-width: 600px) {
            .arrow-container {
              position: static;
              transform: none;
              justify-content: center;
              gap: 40px;
              margin-top: 12px;
            }

            .arrow-btn {
              font-size: 24px;
              padding: 8px 12px;
            }
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
        <h2>Beverage</h2>

        <div style={{ position: "relative", marginTop: "20px" }}>
          <img
            src={images[currentIndex]}
            alt={`Beverage ${currentIndex + 1}`}
            className="responsive-image"
          />

          <div className="arrow-container">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="arrow-btn"
              aria-label="Previous Image"
            >
              ⟨
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="arrow-btn"
              aria-label="Next Image"
            >
              ⟩
            </button>
          </div>
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
