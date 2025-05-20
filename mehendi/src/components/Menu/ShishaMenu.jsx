import React, { useState } from "react";
import BackButton from "../BackButton";
import shisha1 from "../../assets/shisha.jpg";
import shisha2 from "../../assets/shisha1.jpg";
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
    <div style={{ position: "relative", overflow: "visible" }}>
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

          /* Desktop arrows overlay without circles */
          .arrow-desktop {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            color: white;
            border: none;
            font-size: 32px;
            cursor: pointer;
            padding: 4px 8px;
            z-index: 1;
            user-select: none;
            transition: color 0.3s ease;
          }
          .arrow-desktop:hover {
            color: #bfa84b;
          }
          .arrow-left {
            left: 10px;
          }
          .arrow-right {
            right: 10px;
          }

          /* Mobile arrows below image without circles */
          .arrow-mobile {
            display: none;
            justify-content: center;
            gap: 20px;
            margin-top: 16px;
          }
          .arrow-mobile button {
            background: transparent;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 4px 8px;
            user-select: none;
            transition: color 0.3s ease;
          }
          .arrow-mobile button:hover {
            color: #bfa84b;
          }

          /* Responsive image */
          .responsive-image {
            width: 90vw;
            max-width: 900px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            object-fit: contain;
            display: block;
            margin: 0 auto;
            position: relative;
            z-index: 0;
          }

          /* Media queries */
          @media (max-width: 600px) {
            .arrow-desktop {
              display: none !important;
            }
            .arrow-mobile {
              display: flex !important;
            }
          }

          @media (min-width: 601px) {
            .arrow-mobile {
              display: none !important;
            }
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

        <div style={{ position: "relative", display: "inline-block", marginTop: "20px" }}>
          <img
            src={images[currentIndex]}
            alt={`Shisha ${currentIndex + 1}`}
            className="responsive-image"
          />

          <button
            onClick={prevImage}
            className="arrow-desktop arrow-left"
            aria-label="Previous Image"
          >
            ⟨
          </button>
          <button
            onClick={nextImage}
            className="arrow-desktop arrow-right"
            aria-label="Next Image"
          >
            ⟩
          </button>
        </div>

        <div className="arrow-mobile">
          <button onClick={prevImage} aria-label="Previous Image">
            ⟨
          </button>
          <button onClick={nextImage} aria-label="Next Image">
            ⟩
          </button>
        </div>

        <div style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ShishaMenu;
